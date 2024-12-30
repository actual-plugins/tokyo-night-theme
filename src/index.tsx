import type { ActualPlugin, ActualPluginEntry } from 'plugins-shared';
import { GenerateThemeIcon } from './theming/themeIcon';
import { tokyoNightTheme } from './theming/tokyoNight';
import manifest from './manifest';

const pluginEntry: ActualPluginEntry = (React) => {
    const ThemeIcon = GenerateThemeIcon(React);

    const themes = ['Tokyo Night'];

    const plugin: ActualPlugin = {
        name: manifest.name,
        version: manifest.version,
        availableThemes: () => themes,
        getThemeIcon: (themeName, properties) => <ThemeIcon themeName={themeName} style={properties} />,
        getThemeSchema: themeSchema,
        uninstall: (db: IDBDatabase) => {
            const transaction = db.transaction(['asyncStorage'], 'readwrite');
            const objectStore = transaction.objectStore('asyncStorage');
            const currentThemeReq = objectStore.get('theme');
            currentThemeReq.onsuccess = (e: Event) => {
                if('result' in e.target) {
                    const currentTheme = e.target.result as string;
                    if(themes.some(theme => theme.toLocaleLowerCase() === currentTheme)) {
                        objectStore.put('theme', 'light');
                        objectStore.delete('customTheme');
                        transaction.commit();
                    }
                }
            }
        }
    }

    function themeSchema(themeName: string) {
        switch (themeName) {
            case 'Tokyo Night':
                return tokyoNightTheme;
        }

        return {};
    }


    return plugin;
}
export default pluginEntry;