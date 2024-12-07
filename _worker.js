let mytoken = ['auto'], addresses = [
        'icook.tw:2053#官方优选域名',
        'cloudflare.cfgo.cc#优选官方线路'
    ], addressesapi = ['https://cf-workers-text2kv-c5q.pages.dev/ipb.txt?token=llixyz'], addressesnotls = [
        'www.visa.com.sg#官方优选域名',
        'www.wto.org:8080#官方优选域名',
        'www.who.int:8880#官方优选域名'
    ], addressesnotlsapi = ['https://raw.githubusercontent.com/cmliu/CFcdnVmess2sub/main/addressesapi.txt'], DLS = 0x8, addressescsv = [], subconverter = 'SUBAPI.fxxk.dedyn.io', subconfig = 'https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_Full_MultiMode.ini', noTLS = 'true', BotToken = '', ChatID = '', vmessLinks = [], vmessLinksURL = '\x20https://cf-workers-text2kv-c5q.pages.dev/vmess.txt?token=llixyz\x20\x20\x20\x20\x20', proxyhosts = [], proxyhostsURL = 'https://raw.githubusercontent.com/cmliu/CFcdnVmess2sub/main/proxyhosts', FileName = 'CFcdnVmess2sub', SUBUpdateTime = 0x6, total = 0x63, timestamp = 0x3bb25e60800;
const regex = /^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\[.*\]):?(\d+)?#?(.*)?$/;
let fakeUserID, fakeHostName;
function utf8ToBase64(_0x576d54) {
    return btoa(unescape(encodeURIComponent(_0x576d54)));
}
async function sendMessage(_0x4ed2c4, _0x1b705d, _0x4385ca = '') {
    if (BotToken !== '' && ChatID !== '') {
        let _0x5eaa73 = '';
        const _0x59e0de = await fetch('http://ip-api.com/json/' + _0x1b705d + '?lang=zh-CN');
        if (_0x59e0de['status'] == 0xc8) {
            const _0x285374 = await _0x59e0de['json']();
            _0x5eaa73 = _0x4ed2c4 + '\x0aIP:\x20' + _0x1b705d + '\x0a国家:\x20' + _0x285374['country'] + '\x0a<tg-spoiler>城市:\x20' + _0x285374['city'] + '\x0a组织:\x20' + _0x285374['org'] + '\x0aASN:\x20' + _0x285374['as'] + '\x0a' + _0x4385ca;
        } else
            _0x5eaa73 = _0x4ed2c4 + '\x0aIP:\x20' + _0x1b705d + '\x0a<tg-spoiler>' + _0x4385ca;
        let _0x1d8f8f = 'https://api.telegram.org/bot' + BotToken + '/sendMessage?chat_id=' + ChatID + '&parse_mode=HTML&text=' + encodeURIComponent(_0x5eaa73);
        return fetch(_0x1d8f8f, {
            'method': 'get',
            'headers': {
                'Accept': 'text/html,application/xhtml+xml,application/xml;',
                'Accept-Encoding': 'gzip,\x20deflate,\x20br',
                'User-Agent': 'Mozilla/5.0\x20Chrome/90.0.4430.72'
            }
        });
    }
}
let MamaJustKilledAMan = [
    'telegram',
    'twitter',
    'miaoko'
];
async function getAddressesapi(_0x3c4888) {
    if (!_0x3c4888 || _0x3c4888['length'] === 0x0)
        return [];
    let _0x1ae678 = '';
    const _0x4ef035 = new AbortController(), _0x2eb3d1 = setTimeout(() => {
            _0x4ef035['abort']();
        }, 0x7d0);
    try {
        const _0x276299 = await Promise['allSettled'](_0x3c4888['map'](_0x1a14bc => fetch(_0x1a14bc, {
            'method': 'get',
            'headers': {
                'Accept': 'text/html,application/xhtml+xml,application/xml;',
                'User-Agent': 'cmliu/WorkerVless2sub'
            },
            'signal': _0x4ef035['signal']
        })['then'](_0x2e4883 => _0x2e4883['ok'] ? _0x2e4883['text']() : Promise['reject']())));
        for (const _0x543d58 of _0x276299) {
            if (_0x543d58['status'] === 'fulfilled') {
                const _0x1a7c2e = await _0x543d58['value'];
                _0x1ae678 += _0x1a7c2e + '\x0a';
            }
        }
    } catch (_0xf6f0be) {
        console['error'](_0xf6f0be);
    } finally {
        clearTimeout(_0x2eb3d1);
    }
    const _0x4564d0 = await ADD(_0x1ae678);
    return _0x4564d0;
}
async function getAddressescsv(_0xb6371d) {
    if (!addressescsv || addressescsv['length'] === 0x0)
        return [];
    let _0x5565d5 = [];
    for (const _0x4d65dd of addressescsv) {
        try {
            const _0x24c62f = await fetch(_0x4d65dd);
            if (!_0x24c62f['ok']) {
                console['error']('获取CSV地址时出错:', _0x24c62f['status'], _0x24c62f['statusText']);
                continue;
            }
            const _0x266e05 = await _0x24c62f['text']();
            let _0x5a9cfd;
            _0x266e05['includes']('\x0d\x0a') ? _0x5a9cfd = _0x266e05['split']('\x0d\x0a') : _0x5a9cfd = _0x266e05['split']('\x0a');
            const _0x59c258 = _0x5a9cfd[0x0]['split'](','), _0x349460 = _0x59c258['indexOf']('TLS'), _0x2f6c5a = 0x0, _0x1c6e1d = 0x1, _0x33dca8 = _0x349460 + 0x1;
            if (_0x349460 === -0x1) {
                console['error']('CSV文件缺少必需的字段');
                continue;
            }
            for (let _0x3c0ca8 = 0x1; _0x3c0ca8 < _0x5a9cfd['length']; _0x3c0ca8++) {
                const _0xae2c07 = _0x5a9cfd[_0x3c0ca8]['split'](','), _0x1de2eb = _0xae2c07['length'] - 0x1;
                if (_0xae2c07[_0x349460]['toUpperCase']() === _0xb6371d && parseFloat(_0xae2c07[_0x1de2eb]) > DLS) {
                    const _0x3c80fc = _0xae2c07[_0x2f6c5a], _0x206ed1 = _0xae2c07[_0x1c6e1d], _0x613b3e = _0xae2c07[_0x33dca8], _0x154432 = _0x3c80fc + ':' + _0x206ed1 + '#' + _0x613b3e;
                    _0x5565d5['push'](_0x154432);
                }
            }
        } catch (_0x562bdb) {
            console['error']('获取CSV地址时出错:', _0x562bdb);
            continue;
        }
    }
    return _0x5565d5;
}
async function ADD(_0x3f9b12) {
    var _0x2b6191 = _0x3f9b12['replace'](/[	|"'\r\n]+/g, ',')['replace'](/,+/g, ',');
    if (_0x2b6191['charAt'](0x0) == ',')
        _0x2b6191 = _0x2b6191['slice'](0x1);
    if (_0x2b6191['charAt'](_0x2b6191['length'] - 0x1) == ',')
        _0x2b6191 = _0x2b6191['slice'](0x0, _0x2b6191['length'] - 0x1);
    const _0x4d986c = _0x2b6191['split'](',');
    return _0x4d986c;
}
async function nginx() {
    const _0x2a3f40 = '\x0a\x09<!DOCTYPE\x20html>\x0a\x09<html>\x0a\x09<head>\x0a\x09<title>Welcome\x20to\x20nginx!</title>\x0a\x09<style>\x0a\x09\x09body\x20{\x0a\x09\x09\x09width:\x2035em;\x0a\x09\x09\x09margin:\x200\x20auto;\x0a\x09\x09\x09font-family:\x20Tahoma,\x20Verdana,\x20Arial,\x20sans-serif;\x0a\x09\x09}\x0a\x09</style>\x0a\x09</head>\x0a\x09<body>\x0a\x09<h1>Welcome\x20to\x20nginx!</h1>\x0a\x09<p>If\x20you\x20see\x20this\x20page,\x20the\x20nginx\x20web\x20server\x20is\x20successfully\x20installed\x20and\x0a\x09working.\x20Further\x20configuration\x20is\x20required.</p>\x0a\x09\x0a\x09<p>For\x20online\x20documentation\x20and\x20support\x20please\x20refer\x20to\x0a\x09<a\x20href=\x22http://nginx.org/\x22>nginx.org</a>.<br/>\x0a\x09Commercial\x20support\x20is\x20available\x20at\x0a\x09<a\x20href=\x22http://nginx.com/\x22>nginx.com</a>.</p>\x0a\x09\x0a\x09<p><em>Thank\x20you\x20for\x20using\x20nginx.</em></p>\x0a\x09</body>\x0a\x09</html>\x0a\x09';
    return _0x2a3f40;
}
export default {
    async 'fetch'(_0x488412, _0x3f7617) {
        if (_0x3f7617['TOKEN'])
            mytoken = await ADD(_0x3f7617['TOKEN']);
        BotToken = _0x3f7617['TGTOKEN'] || BotToken, ChatID = _0x3f7617['TGID'] || ChatID, subconverter = _0x3f7617['SUBAPI'] || subconverter, subconfig = _0x3f7617['SUBCONFIG'] || subconfig, FileName = _0x3f7617['SUBNAME'] || FileName;
        const _0x2dff59 = _0x488412['headers']['get']('User-Agent') || 'null', _0x202e0a = _0x2dff59['toLowerCase'](), _0x49e89b = new URL(_0x488412['url']), _0x323d4a = _0x49e89b['searchParams']['get']('format') ? _0x49e89b['searchParams']['get']('format')['toLowerCase']() : 'null';
        let _0x396d7e = '', _0xc33550 = '', _0x23f8cd = '', _0x40ba0c = '', _0x2da7bb = '', _0x1f3d0d = '', _0x3df553 = '', _0xbdb881 = Math['floor']((timestamp - Date['now']()) / timestamp * 0x63 * 0x10000000000 * 0x400 / 0x2);
        if (_0x3f7617['UA'])
            MamaJustKilledAMan = MamaJustKilledAMan['concat'](await ADD(_0x3f7617['UA']));
        const _0x5d44c8 = new Date(), _0x25b6c1 = await MD5MD5(Math['ceil'](_0x5d44c8['getTime']()));
        fakeUserID = _0x25b6c1['slice'](0x0, 0x8) + '-' + _0x25b6c1['slice'](0x8, 0xc) + '-' + _0x25b6c1['slice'](0xc, 0x10) + '-' + _0x25b6c1['slice'](0x10, 0x14) + '-' + _0x25b6c1['slice'](0x14), fakeHostName = _0x25b6c1['slice'](0x6, 0x9) + '.' + _0x25b6c1['slice'](0xd, 0x13) + '.xyz', total = total * 0x10000000000 * 0x400;
        let _0x14eadf = Math['floor'](timestamp / 0x3e8);
        if (_0x3f7617['LINK'])
            vmessLinks = await ADD(_0x3f7617['LINK']);
        else {
            if (_0x3f7617['VMESS'])
                vmessLinks = await ADD(_0x3f7617['VMESS']);
        }
        if (_0x3f7617['ADD'])
            addresses = await ADD(_0x3f7617['ADD']);
        if (_0x3f7617['ADDAPI'])
            addressesapi = await ADD(_0x3f7617['ADDAPI']);
        if (_0x3f7617['ADDNOTLS'])
            addressesnotls = await ADD(_0x3f7617['ADDNOTLS']);
        if (_0x3f7617['ADDNOTLSAPI'])
            addressesnotlsapi = await ADD(_0x3f7617['ADDNOTLSAPI']);
        if (_0x3f7617['ADDCSV'])
            addressescsv = await ADD(_0x3f7617['ADDCSV']);
        DLS = _0x3f7617['DLS'] || DLS;
        if (mytoken['length'] > 0x0 && mytoken['some'](_0x503386 => _0x49e89b['pathname']['includes'](_0x503386))) {
            if (vmessLinksURL && vmessLinks['length'] == 0x0)
                try {
                    const _0x21c9e2 = await fetch(vmessLinksURL);
                    if (!_0x21c9e2['ok']) {
                        console['error']('获取地址时出错:', _0x21c9e2['status'], _0x21c9e2['statusText']);
                        return;
                    }
                    const _0x24d5a4 = await _0x21c9e2['text'](), _0x5565fe = _0x24d5a4['split']('\x0a'), _0x1646eb = _0x5565fe['filter'](_0x1fd7b2 => _0x1fd7b2['startsWith']('vmess://'));
                    vmessLinks = vmessLinks['concat'](_0x1646eb);
                } catch (_0x2147c2) {
                    console['error']('获取地址时出错:', _0x2147c2);
                }
            const _0x59de19 = [...new Set(vmessLinks)], _0xad2372 = _0x59de19[Math['floor'](Math['random']() * _0x59de19['length'])];
            noTLS = 'false';
            const _0x1a875e = _0xad2372['slice'](0x8), _0x10c1f4 = atob(_0x1a875e), _0x264898 = JSON['parse'](_0x10c1f4);
            _0x23f8cd = _0x264898['id'], _0x40ba0c = '/' + _0x264898['host'] + ':' + _0x264898['port'] + _0x264898['path'], _0x2da7bb = _0x264898['aid'], _0x1f3d0d = _0x264898['scy'];
            const _0x581d32 = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
            _0x396d7e = '未知';
            let _0x5f5072 = 'http://ip-api.com/json/' + _0x264898['host'] + '?lang=zh-CN';
            if (_0x581d32['test'](_0x264898['ps']))
                _0x5f5072 = 'http://ip-api.com/json/' + _0x264898['ps'] + '?lang=zh-CN';
            const _0x41e5b2 = await fetch(_0x5f5072);
            if (_0x41e5b2['status'] == 0xc8) {
                const _0x259c16 = await _0x41e5b2['json']();
                _0x396d7e = _0x259c16['country'] + '\x20' + _0x259c16['city'];
            }
            if (proxyhostsURL)
                try {
                    const _0x43111b = await fetch(proxyhostsURL);
                    if (!_0x43111b['ok']) {
                        console['error']('获取地址时出错:', _0x43111b['status'], _0x43111b['statusText']);
                        return;
                    }
                    const _0x1fec2f = await _0x43111b['text'](), _0x76802a = _0x1fec2f['split']('\x0a'), _0x22cc9e = _0x76802a['filter'](_0x49b90b => _0x49b90b['trim']() !== '');
                    proxyhosts = proxyhosts['concat'](_0x22cc9e);
                } catch (_0x2d853c) {
                    console['error']('获取地址时出错:', _0x2d853c);
                }
            const _0x437b7a = [...new Set(proxyhosts)];
            _0xc33550 = _0x437b7a[Math['floor'](Math['random']() * _0x437b7a['length'])], _0x3df553 = _0xc33550, await sendMessage('#VMess订阅', _0x488412['headers']['get']('CF-Connecting-IP'), 'UA:\x20' + _0x2dff59 + '</tg-spoiler>\x0a域名:\x20' + _0x49e89b['hostname'] + '\x0a<tg-spoiler>入口:\x20' + (_0x49e89b['pathname'] + _0x49e89b['search']) + '</tg-spoiler>');
        } else {
            _0xc33550 = _0x49e89b['searchParams']['get']('host'), _0x23f8cd = _0x49e89b['searchParams']['get']('uuid'), _0x40ba0c = _0x49e89b['searchParams']['get']('path') || '/?ed=2560', _0x40ba0c = _0x40ba0c[0x0] === '/' ? _0x40ba0c : '/' + _0x40ba0c, _0x2da7bb = _0x49e89b['searchParams']['get']('alterid') || '0', _0x1f3d0d = _0x49e89b['searchParams']['get']('security') || 'auto', _0x3df553 = _0x49e89b['searchParams']['get']('sni') || _0xc33550, _0x396d7e = _0x49e89b['searchParams']['get']('cc') || '未知';
            const _0x1434f3 = _0x49e89b['pathname']['replace'](/^\/|\/$/g, '');
            if (_0x1434f3 && !_0x49e89b['pathname']['includes']('/sub')) {
                const _0x4f837a = new URL('https://' + _0x1434f3 + _0x49e89b['search']);
                return fetch(new Request(_0x4f837a, _0x488412));
            } else {
                if (!_0x49e89b['pathname']['includes']('/sub')) {
                    const _0x2ab430 = _0x3f7617['URL302'] ? 'URL302' : _0x3f7617['URL'] ? 'URL' : null;
                    if (_0x2ab430) {
                        const _0x5966ad = await ADD(_0x3f7617[_0x2ab430]), _0x237041 = _0x5966ad[Math['floor'](Math['random']() * _0x5966ad['length'])];
                        return _0x2ab430 === 'URL302' ? Response['redirect'](_0x237041, 0x12e) : fetch(new Request(_0x237041, _0x488412));
                    }
                    return new Response(await nginx(), { 'headers': { 'Content-Type': 'text/html;\x20charset=UTF-8' } });
                }
            }
            if (_0x396d7e == '未知') {
                let _0xb370f8 = 'http://ip-api.com/json/' + _0x3df553 + '?lang=zh-CN';
                const _0x11e3df = await fetch(_0xb370f8);
                if (_0x11e3df['status'] == 0xc8) {
                    const _0x6ff5c8 = await _0x11e3df['json']();
                    _0x396d7e = _0x6ff5c8['country'] + '\x20' + _0x6ff5c8['city'];
                }
            }
            if (!_0xc33550 || !_0x23f8cd) {
                const _0x5ff6cd = _0x49e89b['origin'] + _0x49e89b['pathname'], _0x579b78 = '\x0a\x09\x09\x09缺少必填参数：host\x20和\x20uuid\x0a\x09\x09\x09Missing\x20required\x20parameters:\x20host\x20and\x20uuid\x0a\x09\x09\x09پارامترهای\x20ضروری\x20وارد\x20نشده:\x20هاست\x20و\x20یوآی‌دی\x0a\x09\x09\x09\x0a\x09\x09\x09' + _0x5ff6cd + '?cc=[vmess\x20name]&host=[your\x20host]&uuid=[your\x20uuid]&path=[your\x20path]\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09https://github.com/cmliu/CFcdnVmess2sub\x0a\x09\x09\x09\x09';
                return new Response(_0x579b78, {
                    'status': 0x190,
                    'headers': { 'content-type': 'text/plain;\x20charset=utf-8' }
                });
            }
        }
        if (_0xc33550['toLowerCase']()['includes']('notls') || _0xc33550['toLowerCase']()['includes']('trycloudflare'))
            noTLS = 'true';
        noTLS = _0x3f7617['NOTLS'] || noTLS;
        let _0x34a37a = generateFakeInfo(_0x49e89b['href'], _0x23f8cd, _0xc33550);
        if (!_0x202e0a['includes']('subconverter') && MamaJustKilledAMan['some'](_0x30a206 => _0x2dff59['toLowerCase']()['includes'](_0x30a206)) && MamaJustKilledAMan['length'] > 0x0) {
            const _0x349981 = _0x3f7617['URL302'] ? 'URL302' : _0x3f7617['URL'] ? 'URL' : null;
            if (_0x349981) {
                const _0x1f2b0f = await ADD(_0x3f7617[_0x349981]), _0x51648a = _0x1f2b0f[Math['floor'](Math['random']() * _0x1f2b0f['length'])];
                return _0x349981 === 'URL302' ? Response['redirect'](_0x51648a, 0x12e) : fetch(new Request(_0x51648a, _0x488412));
            }
            return new Response(await nginx(), { 'headers': { 'Content-Type': 'text/html;\x20charset=UTF-8' } });
        } else {
            if ((_0x202e0a['includes']('clash') || _0x323d4a === 'clash' && !_0x202e0a['includes']('subconverter')) && !_0x202e0a['includes']('nekobox') && !_0x202e0a['includes']('cf-workers-sub'))
                _0x34a37a = 'https://' + subconverter + '/sub?target=clash&url=' + encodeURIComponent(_0x34a37a) + '&insert=false&config=' + encodeURIComponent(subconfig) + '&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true';
            else {
                if ((_0x202e0a['includes']('sing-box') || _0x202e0a['includes']('singbox') || _0x323d4a === 'singbox' && !_0x202e0a['includes']('subconverter')) && !_0x202e0a['includes']('cf-workers-sub'))
                    _0x34a37a = 'https://' + subconverter + '/sub?target=singbox&url=' + encodeURIComponent(_0x34a37a) + '&insert=false&config=' + encodeURIComponent(subconfig) + '&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true';
                else {
                    let _0x570e88;
                    if (noTLS == 'true') {
                        const _0x346250 = await getAddressesapi(addressesnotlsapi), _0x355190 = await getAddressescsv('FALSE');
                        addressesnotls = addressesnotls['concat'](_0x346250), addressesnotls = addressesnotls['concat'](_0x355190);
                        const _0x5d8e39 = [...new Set(addressesnotls)];
                        _0x570e88 = _0x5d8e39['map'](_0x59f4b8 => {
                            let _0x4125e3 = '80', _0x1a5457 = _0x59f4b8;
                            const _0x3e63c2 = _0x1a5457['match'](regex);
                            if (!_0x3e63c2) {
                                if (_0x59f4b8['includes'](':') && _0x59f4b8['includes']('#')) {
                                    const _0x304279 = _0x59f4b8['split'](':');
                                    _0x59f4b8 = _0x304279[0x0];
                                    const _0xa2eb86 = _0x304279[0x1]['split']('#');
                                    _0x4125e3 = _0xa2eb86[0x0], _0x1a5457 = _0xa2eb86[0x1];
                                } else {
                                    if (_0x59f4b8['includes'](':')) {
                                        const _0xf3f53 = _0x59f4b8['split'](':');
                                        _0x59f4b8 = _0xf3f53[0x0], _0x4125e3 = _0xf3f53[0x1];
                                    } else {
                                        if (_0x59f4b8['includes']('#')) {
                                            const _0x376ec0 = _0x59f4b8['split']('#');
                                            _0x59f4b8 = _0x376ec0[0x0], _0x1a5457 = _0x376ec0[0x1];
                                        }
                                    }
                                }
                                _0x1a5457['includes'](':') && (_0x1a5457 = _0x1a5457['split'](':')[0x0]);
                            } else
                                _0x59f4b8 = _0x3e63c2[0x1], _0x4125e3 = _0x3e63c2[0x2] || _0x4125e3, _0x1a5457 = _0x3e63c2[0x3] || _0x59f4b8;
                            const _0x20bae7 = '{\x0a\x22v\x22:\x20\x222\x22,\x0a\x22ps\x22:\x20\x22' + _0x1a5457 + '>' + _0x396d7e + '\x22,\x0a\x22add\x22:\x20\x22' + _0x59f4b8 + '\x22,\x0a\x22port\x22:\x20\x22' + _0x4125e3 + '\x22,\x0a\x22id\x22:\x20\x22' + _0x23f8cd + '\x22,\x0a\x22aid\x22:\x20\x22' + _0x2da7bb + '\x22,\x0a\x22scy\x22:\x20\x22' + _0x1f3d0d + '\x22,\x0a\x22net\x22:\x20\x22ws\x22,\x0a\x22type\x22:\x20\x22none\x22,\x0a\x22host\x22:\x20\x22' + _0xc33550 + '\x22,\x0a\x22path\x22:\x20\x22' + _0x40ba0c + '\x22,\x0a\x22tls\x22:\x20\x22\x22,\x0a\x22sni\x22:\x20\x22\x22,\x0a\x22alpn\x22:\x20\x22\x22,\x0a\x22fp\x22:\x20\x22\x22\x0a}', _0x36cf88 = utf8ToBase64(_0x20bae7), _0x20974c = 'vmess://' + _0x36cf88;
                            return _0x20974c;
                        })['join']('\x0a');
                    }
                    const _0x279d25 = await getAddressesapi(addressesapi), _0x353b6b = await getAddressescsv('TRUE');
                    addresses = addresses['concat'](_0x279d25), addresses = addresses['concat'](_0x353b6b);
                    const _0x5f4d72 = [...new Set(addresses)], _0x5879ff = _0x5f4d72['map'](_0x52911c => {
                            let _0x45ed71 = '443', _0x22c9ca = _0x52911c;
                            const _0x184afb = _0x22c9ca['match'](regex);
                            if (!_0x184afb) {
                                if (_0x52911c['includes'](':') && _0x52911c['includes']('#')) {
                                    const _0x1e878d = _0x52911c['split'](':');
                                    _0x52911c = _0x1e878d[0x0];
                                    const _0x37c5a2 = _0x1e878d[0x1]['split']('#');
                                    _0x45ed71 = _0x37c5a2[0x0], _0x22c9ca = _0x37c5a2[0x1];
                                } else {
                                    if (_0x52911c['includes'](':')) {
                                        const _0x43e8d4 = _0x52911c['split'](':');
                                        _0x52911c = _0x43e8d4[0x0], _0x45ed71 = _0x43e8d4[0x1];
                                    } else {
                                        if (_0x52911c['includes']('#')) {
                                            const _0x35e52d = _0x52911c['split']('#');
                                            _0x52911c = _0x35e52d[0x0], _0x22c9ca = _0x35e52d[0x1];
                                        }
                                    }
                                }
                                _0x22c9ca['includes'](':') && (_0x22c9ca = _0x22c9ca['split'](':')[0x0]);
                            } else
                                _0x52911c = _0x184afb[0x1], _0x45ed71 = _0x184afb[0x2] || _0x45ed71, _0x22c9ca = _0x184afb[0x3] || _0x52911c;
                            const _0x16020e = '{\x0a\x22v\x22:\x20\x222\x22,\x0a\x22ps\x22:\x20\x22' + _0x22c9ca + '>' + _0x396d7e + '\x22,\x0a\x22add\x22:\x20\x22' + _0x52911c + '\x22,\x0a\x22port\x22:\x20\x22' + _0x45ed71 + '\x22,\x0a\x22id\x22:\x20\x22' + _0x23f8cd + '\x22,\x0a\x22aid\x22:\x20\x22' + _0x2da7bb + '\x22,\x0a\x22scy\x22:\x20\x22' + _0x1f3d0d + '\x22,\x0a\x22net\x22:\x20\x22ws\x22,\x0a\x22type\x22:\x20\x22none\x22,\x0a\x22host\x22:\x20\x22' + _0xc33550 + '\x22,\x0a\x22path\x22:\x20\x22' + _0x40ba0c + '\x22,\x0a\x22tls\x22:\x20\x22tls\x22,\x0a\x22sni\x22:\x20\x22' + _0x3df553 + '\x22,\x0a\x22alpn\x22:\x20\x22\x22,\x0a\x22fp\x22:\x20\x22\x22\x0a}', _0x25b2d3 = utf8ToBase64(_0x16020e), _0x62017a = 'vmess://' + _0x25b2d3;
                            return _0x62017a;
                        })['join']('\x0a');
                    let _0x45db1a = _0x5879ff;
                    if (noTLS == 'true')
                        _0x45db1a += '\x0a' + _0x570e88;
                    const _0x31f71f = btoa(_0x45db1a), _0x278604 = new Response(_0x31f71f, {
                            'headers': {
                                'content-type': 'text/plain;\x20charset=utf-8',
                                'Profile-Update-Interval': '' + SUBUpdateTime,
                                'Subscription-Userinfo': 'upload=' + _0xbdb881 + ';\x20download=' + _0xbdb881 + ';\x20total=' + total + ';\x20expire=' + _0x14eadf
                            }
                        });
                    return _0x278604;
                }
            }
        }
        try {
            const _0x152704 = await fetch(_0x34a37a);
            if (!_0x152704['ok'])
                throw new Error('Error\x20fetching\x20subconverterUrl:\x20' + _0x152704['status'] + '\x20' + _0x152704['statusText']);
            let _0x4a6de2 = await _0x152704['text']();
            return _0x4a6de2 = revertFakeInfo(_0x4a6de2, _0x23f8cd, _0xc33550), new Response(_0x4a6de2, {
                'headers': {
                    'Content-Disposition': 'attachment;\x20filename*=utf-8\x27\x27' + encodeURIComponent(FileName) + ';\x20filename=' + FileName,
                    'content-type': 'text/plain;\x20charset=utf-8',
                    'Profile-Update-Interval': '' + SUBUpdateTime,
                    'Subscription-Userinfo': 'upload=' + _0xbdb881 + ';\x20download=' + _0xbdb881 + ';\x20total=' + total + ';\x20expire=' + _0x14eadf
                }
            });
        } catch (_0x530f7a) {
            return new Response('Error:\x20' + _0x530f7a['message'], {
                'status': 0x1f4,
                'headers': { 'content-type': 'text/plain;\x20charset=utf-8' }
            });
        }
    }
};
async function MD5MD5(_0x5ef520) {
    const _0x4ae35c = new TextEncoder(), _0x5b258f = await crypto['subtle']['digest']('MD5', _0x4ae35c['encode'](_0x5ef520)), _0x2eb0f5 = Array['from'](new Uint8Array(_0x5b258f)), _0x7f4580 = _0x2eb0f5['map'](_0xec5d86 => _0xec5d86['toString'](0x10)['padStart'](0x2, '0'))['join'](''), _0x4a1e4c = await crypto['subtle']['digest']('MD5', _0x4ae35c['encode'](_0x7f4580['slice'](0x7, 0x1b))), _0xc924a0 = Array['from'](new Uint8Array(_0x4a1e4c)), _0xa46ead = _0xc924a0['map'](_0x950b2c => _0x950b2c['toString'](0x10)['padStart'](0x2, '0'))['join']('');
    return _0xa46ead['toLowerCase']();
}
function revertFakeInfo(_0x37a6ad, _0x1da10e, _0x39c2b8) {
    return _0x37a6ad = _0x37a6ad['replace'](new RegExp(fakeUserID, 'g'), _0x1da10e)['replace'](new RegExp(fakeHostName, 'g'), _0x39c2b8), _0x37a6ad;
}
function generateFakeInfo(_0xc0470a, _0x55ca59, _0x1fc65b) {
    return _0xc0470a = _0xc0470a['replace'](new RegExp(_0x55ca59, 'g'), fakeUserID)['replace'](new RegExp(_0x1fc65b, 'g'), fakeHostName), _0xc0470a;
}
