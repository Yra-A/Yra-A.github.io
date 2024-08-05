#include <bits/stdc++.h>

using namespace std;
using i64 = std::int64_t;

int main() {    
    ios::sync_with_stdio(false); 
    cin.tie(nullptr);

    int t;
    cin >> t;

    while (t--) {
        string a, b;
        cin >> a >> b;

        /** python 写法
        
        print(int(str(int(a[::-1]) + int(b[::-1]))[::-1]))

        */

        // C++
        a = string(a.rbegin(), a.rend());
        b = string(b.rbegin(), b.rend());

        string s = to_string(stoi(a) + stoi(b));
        s = string(s.rbegin(), s.rend());
        cout << "[" << stoi(s) << "]\n";
    }

    return 0;
}    