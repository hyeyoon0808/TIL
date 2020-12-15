#include <iostream>
#include <string>
#include <stack>
using namespace std;

int main()
{
    string s = "";
    getline(cin, s);
    s += '\n';
    stack<char> st;
    bool check = false;
    for (int i = 0; i < s.size(); i++)
    {
        if (s[i] == '<')
        {
            while (!(st.empty()))
            {
                printf("%c", st.top());
                st.pop();
            }
            printf("%c", '<');
            check = true;
        }
        else if (s[i] == '>')
        {
            printf("%c", '>');
            check = false;
        }
        else if (check)
        {
            printf("%c", s[i]);
        }
        else if (s[i] == ' ' || s[i] == '\n')
        {
            while (!(st.empty()))
            {
                printf("%c", st.top());
                st.pop();
            }
            printf(" ");
        }
        else
        {
            st.push(s[i]);
        }
    }
}