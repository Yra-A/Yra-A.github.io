#include <bits/stdc++.h>

constexpr int N = 1e5 + 5;
int a[N][N];

int main() {    

    int n; // 店面个数
    std::cin >> n;

    for (int i = 0; i < n; i++) {
        int k; // 每家店的菜品个数
        std::cin >> k; 
        for (int j = 0; j < k; j++) {
            std::cin >> a[i][j]; // 输入每个菜品的价格
        }
    }

// TODO: 大约用了多少内存？

    return 0;
}    