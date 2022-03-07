import QueryString from 'querystring';
import Axios from 'axios';

class RequestManager {
  APIEndpoint = '/API/listings'

  teamID = '';

  enableJotFormResponseNormalize = true;

  constructor() { //state veya bind() yok super yok
    this.axios = Axios.create({
      baseURL: this.APIEndpoint,
      withCredentials: true
    });
    this.axios.interceptors.response.use(this.responseNormalizerInterceptor); //interceptors burada ne işe yarıyor
    this.axios.interceptors.request.use(this.requestNormalizerInterceptor); //İstekleri veya yanıtları "then" veya "catch" tarafından işlenmeden önce ele alabilirsiniz.
  }

  responseNormalizerInterceptor = response => {
    const disableJotFormNormalize = response?.config?.url?.indexOf('disableJotFormNormalize') > -1;//? Optional chaining (?.)
    if (disableJotFormNormalize) {
      return response;
    }
    if (response.data && response.data.content) {
      return response.data.content;
    }
    return response;
  }

  requestNormalizerInterceptor = request => {
    const { headers: { disableTeamPrefix = false } = {} } = request;
    if (!disableTeamPrefix) {
      if (request.baseURL.startsWith('/API')) {
        request.url = this.teamPrefix.concat(request.url);
      } else if (request.url.startsWith('/server.php')) {
        const actionsRequiringTeamID = ['getQuestions', 'cloneForm'];
        const formData = QueryString.parse(request.data);
        if (actionsRequiringTeamID.indexOf(formData?.action) > -1) {
          request.data = QueryString.stringify({
            ...formData,
            ...(this.teamID && { teamID: this.teamID })
          });
        }
      }
    }
    delete request?.headers?.disableTeamPrefix;
    return request;
  }

  get teamPrefix() {
    return this.teamID ? `/team/${this.teamID}` : '';
  }

  urlReplace = url => {
    const { apiKey } = QueryString.parse(window.location.search.replace('?', ''));
    if (!apiKey) return url;

    const ps = url.split('?');
    const [path, qs] = ps;
    return `https://api.jotform.com${path}?apiKey=${apiKey}${qs ? `&${qs}` : ''}`;
  }

  get = (url, ...args) => {
    return this.axios.get(this.urlReplace(url), ...args);
  }

  post = (url, ...args) => {
    return this.axios.post(this.urlReplace(url), ...args);
  }

  put = (url, ...args) => {
    return this.axios.put(this.urlReplace(url), ...args);
  }

  delete = (url, ...args) => {
    return this.axios.delete(this.urlReplace(url), ...args);
  }
}

export default new RequestManager();