import { PanelPlugin } from '@grafana/data';

import AppkubeImageBadgePanel from './AppkubeImageBadgePanel';

export const plugin = new PanelPlugin(AppkubeImageBadgePanel).setPanelOptions((builder) => {
  builder.addTextInput({
    path: 'badgeTitle',
    name: 'Badge Title',
    defaultValue: 'Total Functions',
    settings: {
      placeholder: 'Badge Title',
    },
  });
  builder.addTextInput({
    path: 'badgeImage',
    name: 'Badge Image',
    defaultValue: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH1SURBVHgB7VfRcYMwDBW9DsAGoROUDUo3SCcIK3SCsEHSCWCDZIO2EySZADZINlDlQ7RCGGxz9Kt9dzrAlvRkW5YNwF9HBDOAiAk9OrmxnKMousFvgUhTkh1JjeMwfSUHuBhxzE5DUfoEEjnIM3ocSGLRbKb5SHLhd+D+lOQJ2mXp0JC80tIcIRREvrFMb+Zhl+NwmTYQAjJYKwd7CATZFMpH5muYqBEUMBMqiCtJ7GNULkEu/O1lYrqUE7nmsBDUjKZTinL0OSwEs/5e+SQi9R69Jdms0805MO4b24JjNZ4ZhA6gEn2rrv1O6Mi1uVhIRjOYCk1BjzNMQ/Y/2ALQ1U6Sm0JywpHSyqMdT66hz8QVgCav2OhdB8HkOX82JG/gxncw96Kx0cEI8g4JB/FM095YyLt2Q7BSpKMzDEzWS0IcngUn8V5jf8vWlplJ1fdB6NvzCX+24VWRF9xf4RADcofvekrJtp0KpVPNIM+FTTmlmE6RqyC8yFm/Fj4Tl7Ic4W5Cz32ytXpbr9FLx9jPgS3MhCKvfWdMHx7BQfAgdsrHOsSHTpxuBLmHXYbDK9monetSaqI2eZCI5gbauv4J/UvpI8kahgXnhYrTB8wFtpcU2/53oUTPRA0NpJ4gNX3mCpaCJ+b+mnX/ATFLY8ScA/CPQHwBAL34H3ECbh0AAAAASUVORK5CYII=',
    settings: {
      placeholder: 'Badge Image',
    },
  });

});

