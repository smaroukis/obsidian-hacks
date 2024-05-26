import { Plugin, addIcon } from 'obsidian';

export default class MyPlugin extends Plugin {
  async onload() {
    // Add a ribbon icon with a click event handler
    this.addRibbonIcon('dice', 'Run Custom JS', async () => {
      // Your custom JavaScript code goes here
      console.log('Custom JS executed!');
    });
  }

  onunload() {}
}

// Add the icon to the manifest
addIcon('dice', `<svg>...</svg>`);
