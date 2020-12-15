#include <iostream>
#include <stack>
#include <vector>
#include <string>

using namespace std;
string str;
stack<char> s1;

int main()
{
    int x;
    cin >> x;
    cin.ignore(); // /n 제외 시킴
    for(int i=0; i<x; i++){
        getline(cin, str);
        for(int j=0; j < str.size()+1; j++){
            if (str[j] == 32 || str[j] == '\0'){
                while(!s1.empty()){ //스택이 빌때까지
                    printf("%c",s1.top());
                    s1.pop();
                }
                printf(" ");
            }else{
                s1.push(str[j]);
            }
        }
        printf("\n");
    }
    return 0;

}
