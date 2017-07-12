
var callbackHeader;

var res;
var req;
var uniResult = {
    Result: false,
    Detail: null
};

function resultProc(reqs, result, resParam) {
    res = resParam;
    req = reqs;
    callbackHeader = req.param('callback');
    switch (result) {
        case 'Account Error':
            apiError('ACCOUNT_ERROR');
            break;
        case 'Not Login':
            apiError('USER_NOT_LOGIN');
            break;
        case 'null':
            apiReturn('NO_RECORD');
            break;
        case 'Server Error':
            apiError('REMOTE_SERVER_ERROR');
            break;
        case 'Param Error':
            apiError('PARAM_ERROR');
            break;
        case 'Renew Failed':
            apiError('RENEW_FAILED');
            break;
        case 'Added Succeed':
            apiReturn('ADDED_SUCCEED');
            break;
        case 'Already In Favorite':
            apiReturn('ALREADY_IN_FAVORITE');
            break;
        case 'Added Failed':
            apiError('ADDED_FAILED');
            break;
        case 'Deleted Succeed':
            apiReturn('DELETED_SUCCEED');
            break;
        case 'Deleted Failed':
            apiError('DELETED_FAILED');
            break;
        case 'Out Of Range':
            apiError('OUT_OF_RANGE');
            break;
        case 'Session Invalid':
            apiError('SESSION_INVALID');
            break;
        case 'No Info':
            apiError('NO_INFO');
            break;
        default:
            apiReturn(result);
            break;
    }
}

function apiError(err) {
    uniResult.Result = false;
    uniResult.Detail = err;
    returnJSON(res);
}

function apiReturn(content) {
    uniResult.Result = true;
    uniResult.Detail = content;
    returnJSON(res);
}

function returnJSON() {
    var returnStr;
    if (callbackHeader != '' && callbackHeader) {
        returnStr = callbackHeader + "(" + JSON.stringify(uniResult) + ")";
    }
    else {
        returnStr = JSON.stringify(uniResult);
    }

    if (!res._header) {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.setHeader("P3P","CP=CAO PSA OUR");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Credentials",true); //带cookies
        res.header("Access-Control-Allow-Origin", req.headers.origin);
        res.send(returnStr);
    }
    return;
}

module.exports.resultProc = resultProc;