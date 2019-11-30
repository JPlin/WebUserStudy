import pyrebase
import json


def js2json(file_path):
    with open(file_path) as file:
        data = file.read()
        obj = data[data.find('{'):data.rfind('}') + 1]
        print(obj)
        jsonObj = json.loads(obj)
    return jsonObj


class MyFirebase(object):
    def __init__(self, config_path='../config.js'):
        super().__init__()
        config = {
            "apiKey": "AIzaSyDdYIyFMiK7XXJf3sgMGiLWEr1U-vAR_RY",
            "authDomain": "userstudydatabase.firebaseapp.com",
            "databaseURL": "https://userstudydatabase.firebaseio.com",
            "storageBucket": "userstudydatabase.appspot.com",
            "appId": "1:933503788607:web:55ed7868477ed6c4583a8a"
        }
        self.firebase = pyrebase.initialize_app(config)
        self.db = self.firebase.database()
        self.cfgs = js2json(config_path)
        print(self.cfgs)

    def get_by_name(self, name):
        items = self.db.child(name).get()
        ret = []
        for kv in items.each():
            one_submit = kv.val()
            file_name = list(one_submit.keys())[0]
            ret.append((file_name, one_submit[file_name]))
        return ret


if __name__ == '__main__':
    myFirebase = MyFirebase()
    print(myFirebase.get_by_name("jplin_test"))