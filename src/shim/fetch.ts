import global from './global';
`!has('fetch')`;
import 'whatwg-fetch';

export default global.fetch.bind(global) as (input: RequestInfo, init?: RequestInit) => Promise<Response>;
