include(["Engines", "Wine", "QuickScript", "LocalInstallerScript"]);

new LocalInstallerScript()
    .name("GitHub Desktop")
    .editor("GitHub")
    .applicationHomepage("https://desktop.github.com/")
    .author("Plata")
    .executable("GitHubDesktop.exe")
    .wineVersion(LATEST_STAGING_VERSION)
    .wineDistribution("staging")
    .wineArchitecture("amd64")
    .category("Internet")
    .preInstall(function(wine, wizard) {
        wine.windowsVersion("win7");
    })
    .go();
