#include <iostream>

using namespace std;

int main(){
    int n;
    cin >> n;
    for(int i=1; i<=n; i++){
        for(int y=0; y<i; y++){
            cout << "*";
        }
        cout << '\n';
    }
    for(int i=n-1; i>0; i--){
        for(int y=0; y<i; y++){
            cout << "*";
        }
        cout << '\n';
    }
}