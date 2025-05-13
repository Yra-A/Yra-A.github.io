#include <bits/stdc++.h>

int add(int a, int b) {
    return a + b;
}

int main() {    

    // 1、用函数初始化 std::function 对象
    std::function<int(int, int)> f1 = add;
    std::cout << f1(1, 1) << "\n";

    // 2、用匿名函数初始化 std::function 对象
    std::function<int(int, int)> f2 = [](int a, int b) {
        std::cout << v << "\n";
        return a + b;
    };
    std::cout << f2(2, 2) << "\n";

    // 3、auto 简化
    auto f3 = [](int a, int b) {
        return a + b;
    };
    std::cout << f3(3, 3) << "\n";

    // 4、用匿名函数简化自定义排序(对比普通比较函数)
    std::pair<int, int> arr[4] = {{0, 1}, {0, 2}, {0, 3}, {0, 4}};
    std::sort(arr, arr + 4, [](std::pair<int, int> x, std::pair<int, int> y) {
        return x.second > y.second;
    });
    for (auto x : arr) {
        std::cout << "(" << x.first << ", " << x.second << ")" << " ";
    }
    std::cout << "\n";

	// TODO C++14、17 新写法

    return 0;
}   