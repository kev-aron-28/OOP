class Programador:
    def __init__(self,nombre, edad, habilidad = "programar"):
        self.nombre = nombre
        self.edad = edad 
        self.habilidad = habilidad
    
    def saludar(self):
        print(f'Hola me llamo {self.nombre} y se {self.habilidad}')
    
    def saludar_programador(self,nombre):
        print(f'Hola {nombre.nombre}, me llamo {self.nombre}')


class ProgramadorJavascript(Programador):
    def __init__ (self, nombre, edad, habilidad = "javascript"):
        super().__init__(nombre, edad, habilidad)


if __name__ == "__main__":
    kevin = ProgramadorJavascript("Kevin", 18)
    kevin.saludar()

    juan = Programador("Juan", 20)
    kevin.saludar_programador(juan)