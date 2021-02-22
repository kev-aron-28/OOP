#include <stdio.h>
#include <iostream>

using namespace std;


class Programador{
        
    protected:
        string nombre;
        int edad;
        string skill = "Programo";
    public:
        Programador(string _nombre, int _edad){
            nombre = _nombre;
            edad = _edad;
        }
    
    string getName(){
        
        return nombre;
    }

    void setName(string n){
        nombre = n;
    }

    void saludar(string n){

        cout << "Hola " << n << " Me llamo " << nombre << endl;

    }

    void SaySkill(){
        cout << "Hola yo " << skill;
    }

        
};


class ProgramadorJavascript : public Programador{
    private:
        string skill = "programo en javascript";
    public:
    ProgramadorJavascript(string _nomb, int _eda) : Programador(_nomb,  _eda){
        nombre =_nomb;
        edad =_eda;
    }

    
};

int main(int argc, char const *argv[])
{
    
    Programador kevin("kevin",17);
    ProgramadorJavascript aron("Aron", 18);
    aron.saludar(kevin.getName());
    kevin.saludar(aron.getName());
    kevin.SaySkill();
    aron.SaySkill();
    return 0;
}

