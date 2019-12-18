// 这个js文件中用来保存网站中的一些配置信息
// 例如 所有的接口地址 都可以统一保存在这个文件中

// 下面的这些保存配置信息的变量最好避免被其他代码不小心修改了
// 可以将变量命名书写为全大写的形式
// 命名的多个部分使用_链接（下划线命名法）


var BASE_URL = 'http://localhost:8000';//通过变量保存基地址
var GET_CATE = BASE_URL + '/admin/search';//文章搜索的接口地址
//后续的接口地址都基于基地址拼接即可
var LOGIN = BASE_URL + '/admin/login';//登录的接口地址
var LOGOUT = BASE_URL + '/admin/logout';//退出的接口地址
var GET_USER = BASE_URL + '/admin/getuser';//用户信息展示接口