import Backend from 'i18next-http-backend';

class CustomBackend extends Backend {
  constructor(services, options = {}) {
    super(services, options);
  }

  read(language, namespace, callback) {
    let { loadPath, parseLoadPayload } = this.options;
    if (typeof loadPath === 'function') {
      loadPath = loadPath([language], [namespace]);
    }

    let url = this.services.interpolator.interpolate(loadPath, {
      lng: language,
      ns: namespace,
    });

    this.loadUrl(
      url,
      callback,
      parseLoadPayload({ lng: language, ns: namespace })
    );
  }

  loadUrl(url, callback, payload) {
    const {
      options,
      options: { ajax, parse },
    } = this.options;
    ajax(
      url,
      options,
      (data, xhr) => {
        const { status } = xhr;
        if (status >= 500 && status < 600)
          return callback(`failed loading ${url}`, true);
        if (status >= 400 && status < 500)
          return callback(`failed loading ${url}`, false);

        let ret, err;
        try {
          ret = parse(data, url);
        } catch (e) {
          err = `failed parsing ${url} to json`;
        }
        if (err) return callback(err, false);
        callback(null, ret);
      },
      payload
    );
  }
}

export default CustomBackend;
