class Refrigerador: 
    def __init__(self):
        pass
    def abrir(self,estado="On"):
        self._encender_luz(estado)
        self._encender_temperatura()
        
    def _encender_luz(self,estado= "On"):
        print(f"Luz {estado}")

    def _encender_temperatura(self,estado = "on"):
        print(f"Temperatura {estado}")
    

if __name__ == "__main__":
    persona = Refrigerador()

