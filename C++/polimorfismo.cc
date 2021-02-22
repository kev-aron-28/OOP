#include <stdio.h>
#include <iostream>
using namespace std;



class Animal{

    protected:
        string rugido;
    public:
        Animal(string _rugido){
            rugido = _rugido;
        }
    
    void rugir(){
        cout << "El animal hace " << rugido << endl;
    }

};


class Pig : public Animal{

    public:
        Pig(string _rugid) : Animal(_rugid){
            rugido = _rugid;
        }    

    void rugir(){
        cout << "El cerdo hace " << rugido << endl;
    }
};


int main(int argc, char const *argv[])
{
    
    Animal vaca("Muu");
    Pig pig("Oinc");
    pig.rugir();
    vaca.rugir();
    return 0;
}
