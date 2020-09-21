export default async function (method, url, jsonData=null) {
	try {
		let headers = new Headers({
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "*",
			"Access-Control-Allow-Credentials": "true",
    });
    let params = jsonData;

    let Init = {
      method: method.toLowerCase(),
      headers: headers,
      body: params
    }
    let myRequest = new Request(url, Init);

    let res = await fetch(myRequest);

    if (res.ok) {
      let req = await res.text();
      console.log("???" + req);
    } else {
      let err = await res.text();
      console.log(err);
    }

    return res.text();

  }
  catch (e) {
    console.log(e);
  }
}

