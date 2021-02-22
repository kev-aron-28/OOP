class Account:
    def __init__(self, id, nombre, document, email,password):
        self.id = id
        self.nombre = nombre
        self.document = document
        self.email = email
        self.password = password


class Car:
    def __init__(self, id, license, driver,passenger ):
        self.id = id
        self.license = license
        self.driver = driver
        self.passenger = passenger


class Payment:
    def __init__(self, id,):
        self.id = id


class Route:
    def __init__(self, id,init, end):
        self.id = id
        self.init = init
        self.end = end



if __name__ == "__main__":
    pass