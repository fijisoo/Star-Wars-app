export namespace Utils {

    export function fetchData(specifiedDataName){
        let rootPath = 'https://swapi.co/api/';
        return fetch(rootPath + specifiedDataName).then((data)=>{
            return data.json()
        }).catch((er)=>{
            console.error('fetch error' + er);
        })
    }

    export function getSectionData(data, match) {
        console.log('UTILS GET SECTION DATA DATA: ', data, ' MATCH: ', match)
        return data.filter((data2) => {
            if (data2.title == decodeURIComponent(match.single) || data2.name == decodeURIComponent(match.single)) {
                return data2;
            }
        })
    }
}