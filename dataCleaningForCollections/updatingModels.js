//DB connection
var db = connect('localhost:27017/records');//localhost:27017/records

//unsetting useless/deprecated fields
db.models.updateMany({}, {"$unset": {"tifPath": "", "statCoverLC1": ""}});

//setting new fields with its default values
db.models.updateMany({}, {"$set": {"published": false, "customCitation": null}});

//db field update for models collection
db.models.updateMany({"$or": [{"consensusMethod": {"$exists": false}}, {"consensusMethod": {"$nin": ["all", "mean", "median"]}}]}, {"$set": {"consensusMethod": null}});
db.models.updateMany({"$or": [{"modelingMethod": {"$exists": false}}, {"modelingMethod": {"$in": ["","[\"NA\"]", "NA", "[]"]}}]}, {"$set": {"modelingMethod": null}});
db.models.updateMany({"$or": [{"modelLevel": {"$exists": false}}, {"modelLevel": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"modelLevel": null}});
db.models.updateMany({"modelStatus": "developing"}, {"$set": {"modelStatus": "Developing"}});
db.models.updateMany({"$or": [{"modelStatus": {"$exists": false}}, {"modelStatus": {"$nin": ["Developing", "pendingValidation", "Valid"]}}]}, {"$set": {"modelStatus": null}});
db.models.updateMany({"$or": [{"published": {"$exists": false}}, {"published": {"$in": ["","[\"NA\"]", "NA", "[]"]}}]}, {"$set": {"published": null}});
db.models.updateMany({"published": {"$in":["1", 1]}}, {"$set": {"published": true}});
db.models.updateMany({"published": {"$in":["0", 0]}}, {"$set": {"published": false}});
db.models.updateMany({"$or": [{"customCitation": {"$exists": false}}, {"customCitation": {"$in": ["","[\"NA\"]", "NA", "[]"]}}]}, {"$set": {"customCitation": null}});
db.models.updateMany({"$or": [{"isActive": {"$exists": false}}, {"isActive": {"$in": ["","[\"NA\"]", "NA", "[]"]}}]}, {"$set": {"isActive": null}});
db.models.updateMany({"isActive": {"$in":["1", 1]}}, {"$set": {"isActive": true}});
db.models.updateMany({"isActive": {"$in":["0", 0]}}, {"$set": {"isActive": false}});
db.models.updateMany({"$or": [{"modelID": {"$exists": false}}, {"modelID": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"modelID": null}});
db.models.updateMany({"$or": [{"recsUsed": {"$exists": false}}, {"recsUsed": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"recsUsed": null}});
db.models.updateMany({"$or": [{"omission": {"$exists": false}}, {"omission": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"omission": null}});
db.models.updateMany({"$or": [{"perfStatSD": {"$exists": false}}, {"perfStatSD": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"perfStatSD": null}});
db.models.updateMany({"$or": [{"perfStatType": {"$exists": false}}, {"perfStatType": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]},  {"$set": {"perfStatType": null}});
db.models.updateMany({"$or": [{"perfStatValue": {"$exists": false}}, {"perfStatValue": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"perfStatValue": null}});
db.models.updateMany({"$or": [{"pValue": {"$exists": false}}, {"pValue": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"pValue": null}});
db.models.updateMany({"$or": [{"validationType": {"$exists": false}}, {"validationType": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"validationType": null}});
db.models.updateMany({"$or": [{"thresholdType": {"$exists": false}}, {"thresholdType": {"$nin": [0, 10, 20, 30, "Continuous"]}}]}, {"$set": {"thresholdType": null}});
db.models.updateMany({"$or": [{"thresholdValue": {"$exists": false}}, {"thresholdValue": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"thresholdValue": null}});
db.models.updateMany({"$or": [{"modelAuthors": {"$exists": false}}, {"modelAuthors": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"modelAuthors": null}});
db.models.updateMany({"$or": [{"dd": {"$exists": false}},{"dd": {"$in": ["","[\"NA\"]", "NA", -9999]}}]}, {"$set": {"dd": null}});
db.models.updateMany({"$or": [{"mm": {"$exists": false}},{"mm": {"$in": ["","[\"NA\"]", "NA", -9999]}}]}, {"$set": {"mm": null}});
db.models.updateMany({"$or": [{"yyyy": {"$exists": false}}, {"yyyy": {"$gt": 2016}}, {"yyyy": {"$in": ["","[\"NA\"]", "NA", -9999]}}]}, {"$set": {"yyyy": null}});
db.models.updateMany({"$or": [{"statCoverLC2": {"$exists": false}}, {"statCoverLC2": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC2": null}});
db.models.updateMany({"$or": [{"statCoverLC3": {"$exists": false}}, {"statCoverLC3": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC3": null}});
db.models.updateMany({"$or": [{"statCoverLC4": {"$exists": false}}, {"statCoverLC4": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC4": null}});
db.models.updateMany({"$or": [{"statCoverLC5": {"$exists": false}}, {"statCoverLC5": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC5": null}});
db.models.updateMany({"$or": [{"statCoverLC6": {"$exists": false}}, {"statCoverLC6": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC6": null}});
db.models.updateMany({"$or": [{"statCoverLC7": {"$exists": false}}, {"statCoverLC7": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC7": null}});
db.models.updateMany({"$or": [{"statCoverLC8": {"$exists": false}}, {"statCoverLC8": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC8": null}});
db.models.updateMany({"$or": [{"statCoverLC9": {"$exists": false}}, {"statCoverLC9": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC9": null}});
db.models.updateMany({"$or": [{"statCoverLC10": {"$exists": false}}, {"statCoverLC10": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC10": null}});
db.models.updateMany({"$or": [{"statCoverLC11": {"$exists": false}}, {"statCoverLC11": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC11": null}});
db.models.updateMany({"$or": [{"statCoverLC12": {"$exists": false}}, {"statCoverLC12": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC12": null}});
db.models.updateMany({"$or": [{"statCoverLC13": {"$exists": false}}, {"statCoverLC13": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC13": null}});
db.models.updateMany({"$or": [{"statCoverLC14": {"$exists": false}}, {"statCoverLC14": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC14": null}});
db.models.updateMany({"$or": [{"statCoverLC15": {"$exists": false}}, {"statCoverLC15": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC15": null}});
db.models.updateMany({"$or": [{"statCoverLC16": {"$exists": false}}, {"statCoverLC16": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC16": null}});
db.models.updateMany({"$or": [{"statCoverLC17": {"$exists": false}}, {"statCoverLC17": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC17": null}});
db.models.updateMany({"$or": [{"statCoverLC18": {"$exists": false}}, {"statCoverLC18": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC18": null}});
db.models.updateMany({"$or": [{"statCoverLC19": {"$exists": false}}, {"statCoverLC19": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC19": null}});
db.models.updateMany({"$or": [{"statCoverLC20": {"$exists": false}}, {"statCoverLC20": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC20": null}});
db.models.updateMany({"$or": [{"statCoverLC21": {"$exists": false}}, {"statCoverLC21": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC21": null}});
db.models.updateMany({"$or": [{"statCoverLC22": {"$exists": false}}, {"statCoverLC22": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC22": null}});
db.models.updateMany({"$or": [{"statCoverLC23": {"$exists": false}}, {"statCoverLC23": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC23": null}});
db.models.updateMany({"$or": [{"statCoverLC24": {"$exists": false}}, {"statCoverLC24": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC24": null}});
db.models.updateMany({"$or": [{"statCoverLC25": {"$exists": false}}, {"statCoverLC25": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC25": null}});
db.models.updateMany({"$or": [{"statCoverLC26": {"$exists": false}}, {"statCoverLC26": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC26": null}});
db.models.updateMany({"$or": [{"statCoverLC27": {"$exists": false}}, {"statCoverLC27": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC27": null}});
db.models.updateMany({"$or": [{"statCoverLC28": {"$exists": false}}, {"statCoverLC28": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC28": null}});
db.models.updateMany({"$or": [{"statCoverLC29": {"$exists": false}}, {"statCoverLC29": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC29": null}});
db.models.updateMany({"$or": [{"statCoverLC30": {"$exists": false}}, {"statCoverLC30": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC30": null}});
db.models.updateMany({"$or": [{"statCoverLC31": {"$exists": false}}, {"statCoverLC31": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC31": null}});
db.models.updateMany({"$or": [{"statCoverLC32": {"$exists": false}}, {"statCoverLC32": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC32": null}});
db.models.updateMany({"$or": [{"statCoverLC33": {"$exists": false}}, {"statCoverLC33": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC33": null}});
db.models.updateMany({"$or": [{"statCoverLC34": {"$exists": false}}, {"statCoverLC34": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC34": null}});
db.models.updateMany({"$or": [{"statCoverLC35": {"$exists": false}}, {"statCoverLC35": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC35": null}});
db.models.updateMany({"$or": [{"statCoverLC36": {"$exists": false}}, {"statCoverLC36": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC36": null}});
db.models.updateMany({"$or": [{"statCoverLC37": {"$exists": false}}, {"statCoverLC37": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC37": null}});
db.models.updateMany({"$or": [{"statCoverLC38": {"$exists": false}}, {"statCoverLC38": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC38": null}});
db.models.updateMany({"$or": [{"statCoverLC39": {"$exists": false}}, {"statCoverLC39": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC39": null}});
db.models.updateMany({"$or": [{"statCoverLC40": {"$exists": false}}, {"statCoverLC40": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC40": null}});
db.models.updateMany({"$or": [{"statCoverLC41": {"$exists": false}}, {"statCoverLC41": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC41": null}});
db.models.updateMany({"$or": [{"statCoverLC42": {"$exists": false}}, {"statCoverLC42": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC42": null}});
db.models.updateMany({"$or": [{"statCoverLC43": {"$exists": false}}, {"statCoverLC43": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC43": null}});
db.models.updateMany({"$or": [{"statCoverLC44": {"$exists": false}}, {"statCoverLC44": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC44": null}});
db.models.updateMany({"$or": [{"statCoverLC45": {"$exists": false}}, {"statCoverLC45": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC45": null}});
db.models.updateMany({"$or": [{"statCoverLC46": {"$exists": false}}, {"statCoverLC46": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC46": null}});
db.models.updateMany({"$or": [{"statCoverLC47": {"$exists": false}}, {"statCoverLC47": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC47": null}});
db.models.updateMany({"$or": [{"statCoverLC48": {"$exists": false}}, {"statCoverLC48": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC48": null}});
db.models.updateMany({"$or": [{"statCoverLC49": {"$exists": false}}, {"statCoverLC49": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC49": null}});
db.models.updateMany({"$or": [{"statCoverLC50": {"$exists": false}}, {"statCoverLC50": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC50": null}});
db.models.updateMany({"$or": [{"statCoverLC51": {"$exists": false}}, {"statCoverLC51": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC51": null}});
db.models.updateMany({"$or": [{"statCoverLC52": {"$exists": false}}, {"statCoverLC52": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC52": null}});
db.models.updateMany({"$or": [{"statCoverLC53": {"$exists": false}}, {"statCoverLC53": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC53": null}});
db.models.updateMany({"$or": [{"statCoverLC54": {"$exists": false}}, {"statCoverLC54": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC54": null}});
db.models.updateMany({"$or": [{"statCoverLC55": {"$exists": false}}, {"statCoverLC55": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statCoverLC55": null}});
db.models.updateMany({"$or": [{"statForestLoss00": {"$exists": false}}, {"statForestLoss00": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statForestLoss00": null}});
db.models.updateMany({"$or": [{"statForestLoss05": {"$exists": false}}, {"statForestLoss05": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statForestLoss05": null}});
db.models.updateMany({"$or": [{"statForestLoss10": {"$exists": false}}, {"statForestLoss10": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statForestLoss10": null}});
db.models.updateMany({"$or": [{"statForestLoss12": {"$exists": false}}, {"statForestLoss12": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statForestLoss12": null}});
db.models.updateMany({"$or": [{"statForestLoss90": {"$exists": false}}, {"statForestLoss90": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statForestLoss90": null}});
db.models.updateMany({"$or": [{"statFutureForest30c": {"$exists": false}}, {"statFutureForest30c": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statFutureForest30c": null}});
db.models.updateMany({"$or": [{"statFutureForest30d": {"$exists": false}}, {"statFutureForest30d": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statFutureForest30d": null}});
db.models.updateMany({"$or": [{"statFutureForest30h": {"$exists": false}}, {"statFutureForest30h": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statFutureForest30h": null}});
db.models.updateMany({"$or": [{"statModelEOO": {"$exists": false}}, {"statModelEOO": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statModelEOO": null}});
db.models.updateMany({"$or": [{"statRecsEOO": {"$exists": false}}, {"statRecsEOO": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statRecsEOO": null}});
db.models.updateMany({"$or": [{"statRepPA": {"$exists": false}}, {"statRepPA": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statRepPA": null}});
db.models.updateMany({"$or": [{"statRepPA1": {"$exists": false}}, {"statRepPA1": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statRepPA1": null}});
db.models.updateMany({"$or": [{"statRepPA2": {"$exists": false}}, {"statRepPA2": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statRepPA2": null}});
db.models.updateMany({"$or": [{"statRepPA3": {"$exists": false}}, {"statRepPA3": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"statRepPA3": null}});
db.models.updateMany({"$or": [{"thumbPath": {"$exists": false}}, {"thumbPath": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"thumbPath": null}});
db.models.updateMany({"$or": [{"zipPath": {"$exists": false}}, {"zipPath": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"zipPath": null}});
db.models.updateMany({"$or": [{"pngPath": {"$exists": false}}, {"pngPath": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"pngPath": null}});
db.models.updateMany({"$or": [{"methodFile": {"$exists": false}}, {"methodFile": {"$in": ["","[\"NA\"]", "NA", "[]", -9999]}}]}, {"$set": {"methodFile": null}});