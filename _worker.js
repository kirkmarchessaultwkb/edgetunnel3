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
function utf8ToBase64(_0x13d517) {
    return btoa(unescape(encodeURIComponent(_0x13d517)));
}
async function sendMessage(_0x563e7c, _0x355b1d, _0x52ac97 = '') {
    if (BotToken !== '' && ChatID !== '') {
        let _0x455d3a = '';
        const _0x10660d = await fetch('http://ip-api.com/json/' + _0x355b1d + '?lang=zh-CN');
        if (_0x10660d['status'] == 0xc8) {
            const _0x350aea = await _0x10660d['json']();
            _0x455d3a = _0x563e7c + '\x0aIP:\x20' + _0x355b1d + '\x0a国家:\x20' + _0x350aea['country'] + '\x0a<tg-spoiler>城市:\x20' + _0x350aea['city'] + '\x0a组织:\x20' + _0x350aea['org'] + '\x0aASN:\x20' + _0x350aea['as'] + '\x0a' + _0x52ac97;
        } else
            _0x455d3a = _0x563e7c + '\x0aIP:\x20' + _0x355b1d + '\x0a<tg-spoiler>' + _0x52ac97;
        let _0x1f0ac5 = 'https://api.telegram.org/bot' + BotToken + '/sendMessage?chat_id=' + ChatID + '&parse_mode=HTML&text=' + encodeURIComponent(_0x455d3a);
        return fetch(_0x1f0ac5, {
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
async function getAddressesapi(_0x46bb3b) {
    if (!_0x46bb3b || _0x46bb3b['length'] === 0x0)
        return [];
    let _0x5a0ef3 = '';
    const _0x1b7aaf = new AbortController(), _0x9ba4e5 = setTimeout(() => {
            _0x1b7aaf['abort']();
        }, 0x7d0);
    try {
        const _0x251c58 = await Promise['allSettled'](_0x46bb3b['map'](_0x6b1f74 => fetch(_0x6b1f74, {
            'method': 'get',
            'headers': {
                'Accept': 'text/html,application/xhtml+xml,application/xml;',
                'User-Agent': 'cmliu/WorkerVless2sub'
            },
            'signal': _0x1b7aaf['signal']
        })['then'](_0x4f4cf8 => _0x4f4cf8['ok'] ? _0x4f4cf8['text']() : Promise['reject']())));
        for (const _0x52168c of _0x251c58) {
            if (_0x52168c['status'] === 'fulfilled') {
                const _0x122c01 = await _0x52168c['value'];
                _0x5a0ef3 += _0x122c01 + '\x0a';
            }
        }
    } catch (_0x3895a8) {
        console['error'](_0x3895a8);
    } finally {
        clearTimeout(_0x9ba4e5);
    }
    const _0x4e380d = await ADD(_0x5a0ef3);
    return _0x4e380d;
}
async function getAddressescsv(_0x40b68b) {
    if (!addressescsv || addressescsv['length'] === 0x0)
        return [];
    let _0x47bd6c = [];
    for (const _0x128deb of addressescsv) {
        try {
            const _0x1bcf71 = await fetch(_0x128deb);
            if (!_0x1bcf71['ok']) {
                console['error']('获取CSV地址时出错:', _0x1bcf71['status'], _0x1bcf71['statusText']);
                continue;
            }
            const _0x5d4b03 = await _0x1bcf71['text']();
            let _0x490f41;
            _0x5d4b03['includes']('\x0d\x0a') ? _0x490f41 = _0x5d4b03['split']('\x0d\x0a') : _0x490f41 = _0x5d4b03['split']('\x0a');
            const _0x43945d = _0x490f41[0x0]['split'](','), _0x1a891e = _0x43945d['indexOf']('TLS'), _0x3cc5aa = 0x0, _0x3ea451 = 0x1, _0x41a0b7 = _0x1a891e + 0x1;
            if (_0x1a891e === -0x1) {
                console['error']('CSV文件缺少必需的字段');
                continue;
            }
            for (let _0x9d9e41 = 0x1; _0x9d9e41 < _0x490f41['length']; _0x9d9e41++) {
                const _0x13ae60 = _0x490f41[_0x9d9e41]['split'](','), _0x4ca79d = _0x13ae60['length'] - 0x1;
                if (_0x13ae60[_0x1a891e]['toUpperCase']() === _0x40b68b && parseFloat(_0x13ae60[_0x4ca79d]) > DLS) {
                    const _0x4a9e77 = _0x13ae60[_0x3cc5aa], _0x57569 = _0x13ae60[_0x3ea451], _0x33158d = _0x13ae60[_0x41a0b7], _0x2ecbb9 = _0x4a9e77 + ':' + _0x57569 + '#' + _0x33158d;
                    _0x47bd6c['push'](_0x2ecbb9);
                }
            }
        } catch (_0x519fef) {
            console['error']('获取CSV地址时出错:', _0x519fef);
            continue;
        }
    }
    return _0x47bd6c;
}
async function ADD(_0x44f3cb) {
    var _0x442ab9 = _0x44f3cb['replace'](/[	|"'\r\n]+/g, ',')['replace'](/,+/g, ',');
    if (_0x442ab9['charAt'](0x0) == ',')
        _0x442ab9 = _0x442ab9['slice'](0x1);
    if (_0x442ab9['charAt'](_0x442ab9['length'] - 0x1) == ',')
        _0x442ab9 = _0x442ab9['slice'](0x0, _0x442ab9['length'] - 0x1);
    const _0x31c4f8 = _0x442ab9['split'](',');
    return _0x31c4f8;
}
async function nginx() {
    const _0x3115fd = '\x0a\x09<!DOCTYPE\x20html>\x0a\x09<html>\x0a\x09<head>\x0a\x09<title>Welcome\x20to\x20nginx!</title>\x0a\x09<style>\x0a\x09\x09body\x20{\x0a\x09\x09\x09width:\x2035em;\x0a\x09\x09\x09margin:\x200\x20auto;\x0a\x09\x09\x09font-family:\x20Tahoma,\x20Verdana,\x20Arial,\x20sans-serif;\x0a\x09\x09}\x0a\x09</style>\x0a\x09</head>\x0a\x09<body>\x0a\x09<h1>Welcome\x20to\x20nginx!</h1>\x0a\x09<p>If\x20you\x20see\x20this\x20page,\x20the\x20nginx\x20web\x20server\x20is\x20successfully\x20installed\x20and\x0a\x09working.\x20Further\x20configuration\x20is\x20required.</p>\x0a\x09\x0a\x09<p>For\x20online\x20documentation\x20and\x20support\x20please\x20refer\x20to\x0a\x09<a\x20href=\x22http://nginx.org/\x22>nginx.org</a>.<br/>\x0a\x09Commercial\x20support\x20is\x20available\x20at\x0a\x09<a\x20href=\x22http://nginx.com/\x22>nginx.com</a>.</p>\x0a\x09\x0a\x09<p><em>Thank\x20you\x20for\x20using\x20nginx.</em></p>\x0a\x09</body>\x0a\x09</html>\x0a\x09';
    return _0x3115fd;
}
export default {
    async 'fetch'(_0x2d361b, _0x5e2f5e) {
        if (_0x5e2f5e['TOKEN'])
            mytoken = await ADD(_0x5e2f5e['TOKEN']);
        BotToken = _0x5e2f5e['TGTOKEN'] || BotToken, ChatID = _0x5e2f5e['TGID'] || ChatID, subconverter = _0x5e2f5e['SUBAPI'] || subconverter, subconfig = _0x5e2f5e['SUBCONFIG'] || subconfig, FileName = _0x5e2f5e['SUBNAME'] || FileName;
        const _0x54008a = _0x2d361b['headers']['get']('User-Agent') || 'null', _0x3553b9 = _0x54008a['toLowerCase'](), _0x449b1d = new URL(_0x2d361b['url']), _0x4b4920 = _0x449b1d['searchParams']['get']('format') ? _0x449b1d['searchParams']['get']('format')['toLowerCase']() : 'null';
        let _0x2130e7 = '', _0x494f8e = '', _0x56eb23 = '', _0x2b03be = '', _0x499093 = '', _0xc8d036 = '', _0x162466 = '', _0x3e4798 = Math['floor']((timestamp - Date['now']()) / timestamp * 0x63 * 0x10000000000 * 0x400 / 0x2);
        if (_0x5e2f5e['UA'])
            MamaJustKilledAMan = MamaJustKilledAMan['concat'](await ADD(_0x5e2f5e['UA']));
        const _0x403b14 = new Date(), _0xaa44a1 = await MD5MD5(Math['ceil'](_0x403b14['getTime']()));
        fakeUserID = _0xaa44a1['slice'](0x0, 0x8) + '-' + _0xaa44a1['slice'](0x8, 0xc) + '-' + _0xaa44a1['slice'](0xc, 0x10) + '-' + _0xaa44a1['slice'](0x10, 0x14) + '-' + _0xaa44a1['slice'](0x14), fakeHostName = _0xaa44a1['slice'](0x6, 0x9) + '.' + _0xaa44a1['slice'](0xd, 0x13) + '.xyz', total = total * 0x10000000000 * 0x400;
        let _0x5e4aa0 = Math['floor'](timestamp / 0x3e8);
        if (_0x5e2f5e['LINK'])
            vmessLinks = await ADD(_0x5e2f5e['LINK']);
        else {
            if (_0x5e2f5e['VMESS'])
                vmessLinks = await ADD(_0x5e2f5e['VMESS']);
        }
        if (_0x5e2f5e['ADD'])
            addresses = await ADD(_0x5e2f5e['ADD']);
        if (_0x5e2f5e['ADDAPI'])
            addressesapi = await ADD(_0x5e2f5e['ADDAPI']);
        if (_0x5e2f5e['ADDNOTLS'])
            addressesnotls = await ADD(_0x5e2f5e['ADDNOTLS']);
        if (_0x5e2f5e['ADDNOTLSAPI'])
            addressesnotlsapi = await ADD(_0x5e2f5e['ADDNOTLSAPI']);
        if (_0x5e2f5e['ADDCSV'])
            addressescsv = await ADD(_0x5e2f5e['ADDCSV']);
        DLS = _0x5e2f5e['DLS'] || DLS;
        if (mytoken['length'] > 0x0 && mytoken['some'](_0x591e47 => _0x449b1d['pathname']['includes'](_0x591e47))) {
            if (vmessLinksURL && vmessLinks['length'] == 0x0)
                try {
                    const _0x180503 = await fetch(vmessLinksURL);
                    if (!_0x180503['ok']) {
                        console['error']('获取地址时出错:', _0x180503['status'], _0x180503['statusText']);
                        return;
                    }
                    const _0xc2c6db = await _0x180503['text'](), _0x4a112f = _0xc2c6db['split']('\x0a'), _0x325a70 = _0x4a112f['filter'](_0x1a06df => _0x1a06df['startsWith']('vmess://'));
                    vmessLinks = vmessLinks['concat'](_0x325a70);
                } catch (_0x166a07) {
                    console['error']('获取地址时出错:', _0x166a07);
                }
            const _0x1cd0d3 = [...new Set(vmessLinks)], _0x23e098 = _0x1cd0d3[Math['floor'](Math['random']() * _0x1cd0d3['length'])];
            noTLS = 'false';
            const _0x3a55d7 = _0x23e098['slice'](0x8), _0x117f4a = atob(_0x3a55d7), _0xddb2 = JSON['parse'](_0x117f4a);
            _0x56eb23 = _0xddb2['id'], _0x2b03be = '/' + _0xddb2['host'] + ':' + _0xddb2['port'] + _0xddb2['path'], _0x499093 = _0xddb2['aid'], _0xc8d036 = _0xddb2['scy'];
            const _0x5f3200 = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
            _0x2130e7 = '未知';
            let _0x3ec8c3 = 'http://ip-api.com/json/' + _0xddb2['host'] + '?lang=zh-CN';
            if (_0x5f3200['test'](_0xddb2['ps']))
                _0x3ec8c3 = 'http://ip-api.com/json/' + _0xddb2['ps'] + '?lang=zh-CN';
            const _0x1d51c0 = await fetch(_0x3ec8c3);
            if (_0x1d51c0['status'] == 0xc8) {
                const _0x4b92dc = await _0x1d51c0['json']();
                _0x2130e7 = _0x4b92dc['country'] + '\x20' + _0x4b92dc['city'];
            }
            if (proxyhostsURL)
                try {
                    const _0x1f5bb2 = await fetch(proxyhostsURL);
                    if (!_0x1f5bb2['ok']) {
                        console['error']('获取地址时出错:', _0x1f5bb2['status'], _0x1f5bb2['statusText']);
                        return;
                    }
                    const _0x7dbea9 = await _0x1f5bb2['text'](), _0x166a66 = _0x7dbea9['split']('\x0a'), _0x15e2b5 = _0x166a66['filter'](_0x5d8c18 => _0x5d8c18['trim']() !== '');
                    proxyhosts = proxyhosts['concat'](_0x15e2b5);
                } catch (_0x4fe2dd) {
                    console['error']('获取地址时出错:', _0x4fe2dd);
                }
            const _0xbcdfa9 = [...new Set(proxyhosts)];
            _0x494f8e = _0xbcdfa9[Math['floor'](Math['random']() * _0xbcdfa9['length'])], _0x162466 = _0x494f8e, await sendMessage('#VMess订阅', _0x2d361b['headers']['get']('CF-Connecting-IP'), 'UA:\x20' + _0x54008a + '</tg-spoiler>\x0a域名:\x20' + _0x449b1d['hostname'] + '\x0a<tg-spoiler>入口:\x20' + (_0x449b1d['pathname'] + _0x449b1d['search']) + '</tg-spoiler>');
        } else {
            _0x494f8e = _0x449b1d['searchParams']['get']('host'), _0x56eb23 = _0x449b1d['searchParams']['get']('uuid'), _0x2b03be = _0x449b1d['searchParams']['get']('path') || '/?ed=2560', _0x2b03be = _0x2b03be[0x0] === '/' ? _0x2b03be : '/' + _0x2b03be, _0x499093 = _0x449b1d['searchParams']['get']('alterid') || '0', _0xc8d036 = _0x449b1d['searchParams']['get']('security') || 'auto', _0x162466 = _0x449b1d['searchParams']['get']('sni') || _0x494f8e, _0x2130e7 = _0x449b1d['searchParams']['get']('cc') || '未知';
            const _0x4148f3 = _0x449b1d['pathname']['replace'](/^\/|\/$/g, '');
            if (_0x4148f3 && !_0x449b1d['pathname']['includes']('/sub')) {
                const _0xbead3b = new URL('https://' + _0x4148f3 + _0x449b1d['search']);
                return fetch(new Request(_0xbead3b, _0x2d361b));
            } else {
                if (!_0x449b1d['pathname']['includes']('/sub')) {
                    const _0xdcb3cd = _0x5e2f5e['URL302'] ? 'URL302' : _0x5e2f5e['URL'] ? 'URL' : null;
                    if (_0xdcb3cd) {
                        const _0x4da248 = await ADD(_0x5e2f5e[_0xdcb3cd]), _0x548258 = _0x4da248[Math['floor'](Math['random']() * _0x4da248['length'])];
                        return _0xdcb3cd === 'URL302' ? Response['redirect'](_0x548258, 0x12e) : fetch(new Request(_0x548258, _0x2d361b));
                    }
                    return new Response(await nginx(), { 'headers': { 'Content-Type': 'text/html;\x20charset=UTF-8' } });
                }
            }
            if (_0x2130e7 == '未知') {
                let _0x22772b = 'http://ip-api.com/json/' + _0x162466 + '?lang=zh-CN';
                const _0x1ab8c4 = await fetch(_0x22772b);
                if (_0x1ab8c4['status'] == 0xc8) {
                    const _0x347f94 = await _0x1ab8c4['json']();
                    _0x2130e7 = _0x347f94['country'] + '\x20' + _0x347f94['city'];
                }
            }
            if (!_0x494f8e || !_0x56eb23) {
                const _0x388732 = _0x449b1d['origin'] + _0x449b1d['pathname'], _0x2ba5e6 = '\x0a\x09\x09\x09缺少必填参数：host\x20和\x20uuid\x0a\x09\x09\x09Missing\x20required\x20parameters:\x20host\x20and\x20uuid\x0a\x09\x09\x09پارامترهای\x20ضروری\x20وارد\x20نشده:\x20هاست\x20و\x20یوآی‌دی\x0a\x09\x09\x09\x0a\x09\x09\x09' + _0x388732 + '?cc=[vmess\x20name]&host=[your\x20host]&uuid=[your\x20uuid]&path=[your\x20path]\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09https://github.com/cmliu/CFcdnVmess2sub\x0a\x09\x09\x09\x09';
                return new Response(_0x2ba5e6, {
                    'status': 0x190,
                    'headers': { 'content-type': 'text/plain;\x20charset=utf-8' }
                });
            }
        }
        if (_0x494f8e['toLowerCase']()['includes']('notls') || _0x494f8e['toLowerCase']()['includes']('trycloudflare'))
            noTLS = 'true';
        noTLS = _0x5e2f5e['NOTLS'] || noTLS;
        let _0x3857d9 = generateFakeInfo(_0x449b1d['href'], _0x56eb23, _0x494f8e);
        if (!_0x3553b9['includes']('subconverter') && MamaJustKilledAMan['some'](_0x4bc40d => _0x54008a['toLowerCase']()['includes'](_0x4bc40d)) && MamaJustKilledAMan['length'] > 0x0) {
            const _0x43ec33 = _0x5e2f5e['URL302'] ? 'URL302' : _0x5e2f5e['URL'] ? 'URL' : null;
            if (_0x43ec33) {
                const _0x4e6d64 = await ADD(_0x5e2f5e[_0x43ec33]), _0x250c50 = _0x4e6d64[Math['floor'](Math['random']() * _0x4e6d64['length'])];
                return _0x43ec33 === 'URL302' ? Response['redirect'](_0x250c50, 0x12e) : fetch(new Request(_0x250c50, _0x2d361b));
            }
            return new Response(await nginx(), { 'headers': { 'Content-Type': 'text/html;\x20charset=UTF-8' } });
        } else {
            if ((_0x3553b9['includes']('clash') || _0x4b4920 === 'clash' && !_0x3553b9['includes']('subconverter')) && !_0x3553b9['includes']('nekobox') && !_0x3553b9['includes']('cf-workers-sub'))
                _0x3857d9 = 'https://' + subconverter + '/sub?target=clash&url=' + encodeURIComponent(_0x3857d9) + '&insert=false&config=' + encodeURIComponent(subconfig) + '&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true';
            else {
                if ((_0x3553b9['includes']('sing-box') || _0x3553b9['includes']('singbox') || _0x4b4920 === 'singbox' && !_0x3553b9['includes']('subconverter')) && !_0x3553b9['includes']('cf-workers-sub'))
                    _0x3857d9 = 'https://' + subconverter + '/sub?target=singbox&url=' + encodeURIComponent(_0x3857d9) + '&insert=false&config=' + encodeURIComponent(subconfig) + '&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true';
                else {
                    let _0x26ed76;
                    if (noTLS == 'true') {
                        const _0x402542 = await getAddressesapi(addressesnotlsapi), _0x36094f = await getAddressescsv('FALSE');
                        addressesnotls = addressesnotls['concat'](_0x402542), addressesnotls = addressesnotls['concat'](_0x36094f);
                        const _0x44179c = [...new Set(addressesnotls)];
                        _0x26ed76 = _0x44179c['map'](_0x61400d => {
                            let _0x342576 = '80', _0x2f21df = _0x61400d;
                            const _0x224a90 = _0x2f21df['match'](regex);
                            if (!_0x224a90) {
                                if (_0x61400d['includes'](':') && _0x61400d['includes']('#')) {
                                    const _0x4f8fb4 = _0x61400d['split'](':');
                                    _0x61400d = _0x4f8fb4[0x0];
                                    const _0x8e214c = _0x4f8fb4[0x1]['split']('#');
                                    _0x342576 = _0x8e214c[0x0], _0x2f21df = _0x8e214c[0x1];
                                } else {
                                    if (_0x61400d['includes'](':')) {
                                        const _0x1fcd65 = _0x61400d['split'](':');
                                        _0x61400d = _0x1fcd65[0x0], _0x342576 = _0x1fcd65[0x1];
                                    } else {
                                        if (_0x61400d['includes']('#')) {
                                            const _0x79aa8e = _0x61400d['split']('#');
                                            _0x61400d = _0x79aa8e[0x0], _0x2f21df = _0x79aa8e[0x1];
                                        }
                                    }
                                }
                                _0x2f21df['includes'](':') && (_0x2f21df = _0x2f21df['split'](':')[0x0]);
                            } else
                                _0x61400d = _0x224a90[0x1], _0x342576 = _0x224a90[0x2] || _0x342576, _0x2f21df = _0x224a90[0x3] || _0x61400d;
                            const _0xf5e8e1 = '{\x0a\x22v\x22:\x20\x222\x22,\x0a\x22ps\x22:\x20\x22' + _0x2f21df + '>' + _0x2130e7 + '\x22,\x0a\x22add\x22:\x20\x22' + _0x61400d + '\x22,\x0a\x22port\x22:\x20\x22' + _0x342576 + '\x22,\x0a\x22id\x22:\x20\x22' + _0x56eb23 + '\x22,\x0a\x22aid\x22:\x20\x22' + _0x499093 + '\x22,\x0a\x22scy\x22:\x20\x22' + _0xc8d036 + '\x22,\x0a\x22net\x22:\x20\x22ws\x22,\x0a\x22type\x22:\x20\x22none\x22,\x0a\x22host\x22:\x20\x22' + _0x494f8e + '\x22,\x0a\x22path\x22:\x20\x22' + _0x2b03be + '\x22,\x0a\x22tls\x22:\x20\x22\x22,\x0a\x22sni\x22:\x20\x22\x22,\x0a\x22alpn\x22:\x20\x22\x22,\x0a\x22fp\x22:\x20\x22\x22\x0a}', _0x59b8eb = utf8ToBase64(_0xf5e8e1), _0x55adb8 = 'vmess://' + _0x59b8eb;
                            return _0x55adb8;
                        })['join']('\x0a');
                    }
                    const _0x10b0fe = await getAddressesapi(addressesapi), _0x156d19 = await getAddressescsv('TRUE');
                    addresses = addresses['concat'](_0x10b0fe), addresses = addresses['concat'](_0x156d19);
                    const _0x53c8c0 = [...new Set(addresses)], _0x598037 = _0x53c8c0['map'](_0x1fb982 => {
                            let _0x5e4480 = '443', _0x445972 = _0x1fb982;
                            const _0x51eb76 = _0x445972['match'](regex);
                            if (!_0x51eb76) {
                                if (_0x1fb982['includes'](':') && _0x1fb982['includes']('#')) {
                                    const _0x5690a4 = _0x1fb982['split'](':');
                                    _0x1fb982 = _0x5690a4[0x0];
                                    const _0x414c3d = _0x5690a4[0x1]['split']('#');
                                    _0x5e4480 = _0x414c3d[0x0], _0x445972 = _0x414c3d[0x1];
                                } else {
                                    if (_0x1fb982['includes'](':')) {
                                        const _0x480666 = _0x1fb982['split'](':');
                                        _0x1fb982 = _0x480666[0x0], _0x5e4480 = _0x480666[0x1];
                                    } else {
                                        if (_0x1fb982['includes']('#')) {
                                            const _0x5138e2 = _0x1fb982['split']('#');
                                            _0x1fb982 = _0x5138e2[0x0], _0x445972 = _0x5138e2[0x1];
                                        }
                                    }
                                }
                                _0x445972['includes'](':') && (_0x445972 = _0x445972['split'](':')[0x0]);
                            } else
                                _0x1fb982 = _0x51eb76[0x1], _0x5e4480 = _0x51eb76[0x2] || _0x5e4480, _0x445972 = _0x51eb76[0x3] || _0x1fb982;
                            const _0x335874 = '{\x0a\x22v\x22:\x20\x222\x22,\x0a\x22ps\x22:\x20\x22' + _0x445972 + '>' + _0x2130e7 + '\x22,\x0a\x22add\x22:\x20\x22' + _0x1fb982 + '\x22,\x0a\x22port\x22:\x20\x22' + _0x5e4480 + '\x22,\x0a\x22id\x22:\x20\x22' + _0x56eb23 + '\x22,\x0a\x22aid\x22:\x20\x22' + _0x499093 + '\x22,\x0a\x22scy\x22:\x20\x22' + _0xc8d036 + '\x22,\x0a\x22net\x22:\x20\x22ws\x22,\x0a\x22type\x22:\x20\x22none\x22,\x0a\x22host\x22:\x20\x22' + _0x494f8e + '\x22,\x0a\x22path\x22:\x20\x22' + _0x2b03be + '\x22,\x0a\x22tls\x22:\x20\x22tls\x22,\x0a\x22sni\x22:\x20\x22' + _0x162466 + '\x22,\x0a\x22alpn\x22:\x20\x22\x22,\x0a\x22fp\x22:\x20\x22\x22\x0a}', _0x928b3e = utf8ToBase64(_0x335874), _0x2e5beb = 'vmess://' + _0x928b3e;
                            return _0x2e5beb;
                        })['join']('\x0a');
                    let _0xd59cd2 = _0x598037;
                    if (noTLS == 'true')
                        _0xd59cd2 += '\x0a' + _0x26ed76;
                    const _0x55c9b2 = btoa(_0xd59cd2), _0xd7a396 = new Response(_0x55c9b2, {
                            'headers': {
                                'content-type': 'text/plain;\x20charset=utf-8',
                                'Profile-Update-Interval': '' + SUBUpdateTime,
                                'Subscription-Userinfo': 'upload=' + _0x3e4798 + ';\x20download=' + _0x3e4798 + ';\x20total=' + total + ';\x20expire=' + _0x5e4aa0
                            }
                        });
                    return _0xd7a396;
                }
            }
        }
        try {
            const _0x5104a3 = await fetch(_0x3857d9);
            if (!_0x5104a3['ok'])
                throw new Error('Error\x20fetching\x20subconverterUrl:\x20' + _0x5104a3['status'] + '\x20' + _0x5104a3['statusText']);
            let _0x4a9267 = await _0x5104a3['text']();
            return _0x4a9267 = revertFakeInfo(_0x4a9267, _0x56eb23, _0x494f8e), new Response(_0x4a9267, {
                'headers': {
                    'Content-Disposition': 'attachment;\x20filename*=utf-8\x27\x27' + encodeURIComponent(FileName) + ';\x20filename=' + FileName,
                    'content-type': 'text/plain;\x20charset=utf-8',
                    'Profile-Update-Interval': '' + SUBUpdateTime,
                    'Subscription-Userinfo': 'upload=' + _0x3e4798 + ';\x20download=' + _0x3e4798 + ';\x20total=' + total + ';\x20expire=' + _0x5e4aa0
                }
            });
        } catch (_0x42870d) {
            return new Response('Error:\x20' + _0x42870d['message'], {
                'status': 0x1f4,
                'headers': { 'content-type': 'text/plain;\x20charset=utf-8' }
            });
        }
    }
};
async function MD5MD5(_0x5596fb) {
    const _0x33826d = new TextEncoder(), _0x244018 = await crypto['subtle']['digest']('MD5', _0x33826d['encode'](_0x5596fb)), _0x4ffa9b = Array['from'](new Uint8Array(_0x244018)), _0x57c6f = _0x4ffa9b['map'](_0x3bdabe => _0x3bdabe['toString'](0x10)['padStart'](0x2, '0'))['join'](''), _0x4e6077 = await crypto['subtle']['digest']('MD5', _0x33826d['encode'](_0x57c6f['slice'](0x7, 0x1b))), _0x59b82c = Array['from'](new Uint8Array(_0x4e6077)), _0x2c0eb8 = _0x59b82c['map'](_0x47170d => _0x47170d['toString'](0x10)['padStart'](0x2, '0'))['join']('');
    return _0x2c0eb8['toLowerCase']();
}
function revertFakeInfo(_0x1d1cf0, _0x431a9f, _0x353fd8) {
    return _0x1d1cf0 = _0x1d1cf0['replace'](new RegExp(fakeUserID, 'g'), _0x431a9f)['replace'](new RegExp(fakeHostName, 'g'), _0x353fd8), _0x1d1cf0;
}
function generateFakeInfo(_0x27eb94, _0x3f1b60, _0x299484) {
    return _0x27eb94 = _0x27eb94['replace'](new RegExp(_0x3f1b60, 'g'), fakeUserID)['replace'](new RegExp(_0x299484, 'g'), fakeHostName), _0x27eb94;
}
