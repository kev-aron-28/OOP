class Rectangulo:
    def __init__(self,base, altura):
        self.base = base
        self.altura = altura
    
    def area(self):
        return f'El area del rectangulo {self.base} * {self.altura} = {self.base * self.altura}'
    


class Cuadrado(Rectangulo):
    def __init__(self,base):
        super().__init__(base, base)
    
    def area(self):
        return f'EL area del cuadrado es {self.base} * {self.altura} = {self.base * self.altura}'
    



def main():
    rectangulo = Rectangulo(10,5)
    print(rectangulo.area())
    cuadrado = Cuadrado(10)
    print(cuadrado.area())


if __name__ == "__main__":
    main()