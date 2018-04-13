
export namespace Utils {
    export function fetchData(specifiedDataName){
        let rootPath = 'https://swapi.co/api/';
        return fetch(rootPath + specifiedDataName).then((data)=>{
            return data.json()
        }).catch((er)=>{
            console.error('fetch error' + er);
        })
    }
}