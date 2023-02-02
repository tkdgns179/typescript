let logged;

function sendAnalytics(data: any) {
    console.log(data)
    logged = true;
    console.log(logged);
}

sendAnalytics('The data')