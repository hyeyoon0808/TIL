#include <iostream>

using namespace std;

int main(){
    int burger[3];
    int juice[2];
    int sb=9999;
    int sj=9999;
    int total;

    for(int i=0; i<3; i++){
        cin >> burger[i];
        if(burger[i] < sb){
            sb = burger[i];
        }
    }
    for(int i=0; i<2; i++){
        cin >> juice[i];
        if(juice[i] < sj){
            sj = juice[i];
        }
    }
    total = sb + sj - 50;
    cout << total;
}
