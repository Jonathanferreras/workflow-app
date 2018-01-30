var urls = {
  postDocument:'https://prod-15.northcentralus.logic.azure.com:443/workflows/c5a99151cb544691a316e4682743aef7/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=lDgzlhkdlkLDf3WQDVQt8n_gnAT1V7cgbGWz4_E3wwM',
  getDocument: 'https://prod-11.northcentralus.logic.azure.com:443/workflows/ad19babe2d564e86a4df1aeab57fa0fd/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=kItRZNDOg1oJwEsbV_0MHALRGDDsNbdLHZHyWY2Btfg',
  getAllDocuments: 'https://prod-10.northcentralus.logic.azure.com:443/workflows/47aad62a16144b42a0ee505aa693f97b/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=8pmrvmsoTMTCg_N3Gbsi-1SWqW509PBjc7VPVRVd_MM',
  deleteDocument: 'https://prod-03.northcentralus.logic.azure.com:443/workflows/b772063fdbb14eab91db1adbd8112a41/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=0GP3fiyij6ErmCwYptdjilYR9buoYn2ZDmq8oNrZoAk',
};

module.exports = { logicApp: urls }
