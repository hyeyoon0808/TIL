#include <iostream>
#include <string>
#include <stack>

using namespace std;

int main()
{
    stack<char> stOpen;
    string input;
    cin >> input;

    int result = 0;
    char preChar;
    for (auto ch : input)
    {
        if (ch == '(')
        {
            stOpen.push(ch);
        }
        else
        {
            if (preChar == '(')
            {
                result += stOpen.size() - 1;
            }
            else
            {
                result++;
            }
            stOpen.pop();
        }
        preChar = ch;
    }
    cout << result << endl;
    return 0;
}