// const baseUrl='http://192.168.2.222:8082/efms';
//post请求
function apiPostRequest(url,data) {
    let result = axios({
        method: 'post',
        url: baseUrl+url,
        data: Qs.stringify(data), 
        headers : {
            "Content-Type":'application/x-www-form-urlencoded; charset=UTF-8'
        },
    }).then(resp=> {
        return resp.data;
    }).catch(error=>{
        return "exception="+error;
    });
    return result;
}
 
//文件post请求
function filesUpload(url,data) {
    let result = axios({
        method: 'post',
        url: baseUrl+url,
        data: data, 
        header:{
            'Content-Type':'multipart/form-data'
        }
    }).then(resp=> {
        return resp.data;
    }).catch(error=>{
        return "exception="+error;
    });
    return result;
} 
function apiGetRequest(url,data) {
    var result = axios({
        method: 'get',
        url: baseUrl+url,
        params: data,
        header:{
            'Content-Type':'application/json'
        },
        // withCredentials: true 
    }).then(function (resp) {
        return resp.data;
    }).catch(function (error) {
        return "exception=" + error;
    });
    return result;
}
 
Array.prototype.remove = function(val) { 
    var index = this.indexOf(val); 
    if (index > -1) { 
        this.splice(index, 1); 
    } 
};