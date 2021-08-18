---
title: Test Post
date: August 17, 2021
desc: The blog page and this blog are largely under construction. This blog tests markdown to HTML Conversion.
---

## Heading Two

### List

- Item 1
- Item 2
- Item 3

[Github Repo](https://github.com/balajiofficial/Website)
![Image](https://raw.githubusercontent.com/balajiofficial/BalaNotes/main/images/Screenshot.png)

<img src="/profile.png" alt="Test Image" width=100>

Link to <a href="/projects">Projects Page</a>

```cpp
#include<bits\stdc++.h>

using namespace std;

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);
  int n, a[100];
  cin >> n;
  for(int i = 0; i < n; ++i) {
    cin >> a[i];
  }
  sort(a, a+n);
  for(int i = 0;  i < n; ++i) {
    cout << a[i] << " ";
  }
  cout << "\n";
}
```

```py
def fib(int n):
  return 1 if n <= 2 else fib(n - 1) + fib(n - 2)

if __name__ == "__main__":
  n = int(input("Enter number : "))
  print(fib(n))
```

<h1>Test</h1>
