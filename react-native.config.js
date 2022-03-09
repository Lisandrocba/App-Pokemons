module.exports = {
    project:{
        ios:{},
        android:{},
    },
    assets: ['./assets/Shippori_Antique_B1/']
}

module.exports = {
    dependencies: {
      "react-native-sqlite-storage": {
        platforms: {
          android: {
            sourceDir:
              "../node_modules/react-native-sqlite-storage/platforms/android-native",
            packageImportPath: "import io.liteglue.SQLitePluginPackage;",
            packageInstance: "new SQLitePluginPackage()"
          }
        }
      }
    }
  };