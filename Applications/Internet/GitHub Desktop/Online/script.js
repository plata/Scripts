include(["Engines", "Wine", "QuickScript", "OnlineInstallerScript"]);

new OnlineInstallerScript()
    .name("GitHub Desktop")
    .editor("GitHub")
    .applicationHomepage("https://desktop.github.com/")
    .author("Plata")
    .url("https://desktop.githubusercontent.com/releases/1.0.1-b418f683/GitHubDesktopSetup.exe")
    .checksum("1ee7c810380d00561f28922b113371b9d6db271a")
    .executable("GitHubDesktop.exe")
    .wineArchitecture("amd64")
    .category("Internet")
    .preInstall(function(wine, wizard) {
        wine.windowsVersion("win7");
    })
    .go();
