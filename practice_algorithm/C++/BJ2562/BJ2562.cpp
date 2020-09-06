#include <iostream>

using namespace std;

int main(){
    int x[9]; 
    int biggest, order;
    for(int i=0; i < 9; i++){
        cin >> x[i];
        if(biggest < x[i]){
            biggest = x[i];
            order = i + 1;
        }
    }
    cout << biggest << endl << order;
}