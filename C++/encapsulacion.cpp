#include <stdio.h>
#include <iostream>
using namespace std;

class Account {
    protected:
        string user;
    private:
        string password;
    public:
        Account(string _passw, string _user){
            password = _passw;
            user = _user;
        }
    
    void getUser(){
        cout << "Usuario " << user << endl;
    }
};

int main(int argc, char const *argv[])
{
    Account kevin("kevin123", "Kevaron");
    kevin.getUser();
    

    return 0;
}
