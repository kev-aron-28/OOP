class Persona:

    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
    
    def show_info(self):
        print(f"Hola me llamo {self.nombre} y tengo {self.edad}")


if __name__ == "__main__":
    kevin = Persona("Kevin", 17)
    kevin.show_info()
    