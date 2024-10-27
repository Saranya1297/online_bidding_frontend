import { message } from "antd";
import { https } from "./loginHttp";

let simpleAxiosApi = {
    loginAPi(payload) {
        let url = "/login";
        return Method.dataPost(url, payload);
    },
    registerApi(payload) {
        let url = '/register';
        return Method.dataPost(url, payload);
    }
}

async function logout() {
    // await localStorage.clear();
    // history.push("/login");
  }

const Method = {
    async dataPost(newUrl, body) {
        const url = newUrl;
        return await new Promise((resolve, reject) => {
            https
                .post(url, body, {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },
                }).then((result) => {
                    if (result.status == 200 || result.status == 201) {
                        return resolve({
                            status: 1,
                            result: result
                        })
                    } else if (result.status == 212) {
                        return resolve({
                            status: 4,
                            result: result,
                        });
                    } else {
                        if (result) {
                            return reject({
                                status: 3,
                                error: result.data.message,
                            });
                        } else {
                            return reject({
                                status: 4,
                                error: "Something went wrong.",
                            });
                        }
                    }
                }).catch((err) => {
                    if (err.response) {
                        if (err.response.status !== null && err.response.status !== undefined) {
                            if (err.response.status == 401 || err.response.status == 409) {
                                let unauthorizedStatus = err.response.status;
                                if (unauthorizedStatus == 401) {
                                    logout();
                                    message.error("Unauthorized");
                                }
                                if (unauthorizedStatus == 409) {
                                    logout();
                                    message.error("Your Account Already Exist");
                                }
                            } else {
                                return reject({
                                    status: 5,
                                    error: err,
                                });
                            }
                        }
                    } else {
                        return reject({
                          status: 5,
                          error: err,
                        });
                    }
                })
        })
    }
}

export default simpleAxiosApi;