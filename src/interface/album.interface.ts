const sectionList = ["HOME", "FWC", "QAT", "ECU", "SEN", "NED", "ENG", "IRN", "USA", "WAL", "ARG", "KSA", "MEX", "POL", "FRA", "AUS", "DEN", "TUN", "ESP", "CRC", "GER", "JPN", "BEL", "CAN", "MAR", "CRO", "BRA", "SRB", "SUI", "CMR", "POR", "GHA", "URU", "KOR", "BELIEVERS"]
const fwcCount = 29
const teamCount = 20
const believerCount = 8
const HOME_INDEX = sectionList.findIndex((item)=>item == "HOME").toString()
const FWC_INDEX = sectionList.findIndex((item)=>item == "FWC").toString()
const BLV_INDEX = sectionList.findIndex((item)=>item == "BELIEVERS").toString()

export {sectionList, fwcCount, teamCount, believerCount, HOME_INDEX, FWC_INDEX, BLV_INDEX}

export interface AlbumInterface {
    [card: string]: boolean
}