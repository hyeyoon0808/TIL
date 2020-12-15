#include <iostream>
using namespace std;

int main(){
    int c, cc;
    int m[100][1000];
    float avg[1000];
    float total[1000] = {0, };
    float cnt[1000];
    
    cout << fixed;
    cout.precision(3);
    cin >> c;
    for(int i=0; i<c; i++){
        float count = 0.0;
        cin >> cc;
        for(int j=0; j<cc; j++){
            cin >> m[i][j];
            total[i] += m[i][j];
        }
        avg[i] = total[i] / (float)cc;
        for(int j=0; j<cc; j++)
            if(m[i][j] > avg[i])
                count++;
        cnt[i] = count/cc*100;
    } 
    for(int i=0; i<c; i++)
        cout << cnt[i] << "%" <<endl;
    
    return 0;
}