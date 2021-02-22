
#include <stdio.h>
#include <iostream>

using namespace std;



class Programador{
    private:
        string nombre;
        int edad;
        string skill;
    public:
        Programador(string _nombre, int _edad, string _skill){
            nombre = _nombre;
            edad = _edad;
            skill = _skill;
        }
    
    void getInfo(){
        cout << "Nombre " << nombre << " Edad " << edad << " Skill " << skill << endl;
    }
};

int main(int argc, char const *argv[])
{
    Programador kevin("Kevin", 17, "Programar");
    kevin.getInfo();
}
