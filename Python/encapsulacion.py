class Email:
    def __init__(self):
        self._nombre = "kevin"
        self._domain = "@.com.mx"

    @property
    def mail(self):
        return f'{self._nombre}{self._domain}'
    @property
    def domain(self):
        return f'{self._nombre}{self._domain}'

    @mail.setter
    def mail(self, name):
        self._nombre = name
        print("Nombre modificado")
        return f'{name}{self._domain}'

    @domain.setter
    def domain(self, domain):
        print("Dominio cambiado")
        self._domain = domain
        return f'{self._nombre}{domain}'

if __name__ == "__main__":
    correo = Email()
    print(correo.mail)
    correo.set_mail =  "tapia"
    print(correo.mail)

    print(correo.domain)
    correo.domain = "@ibime.com.mx"
    print(correo.domain)