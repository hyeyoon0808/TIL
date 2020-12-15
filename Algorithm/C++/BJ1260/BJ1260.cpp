#include <iostream>
#include <queue>
#include <cstring>
using namespace std;

const int MAX = 1000 + 1;
int N, M, V;
int adjacent[MAX][MAX];
bool visited[MAX];
queue<int> q;

void DFS(int idx)
{
    cout << idx << " ";
    for(int i=1; i<=N; i++)
        if (adjacent[idx][i] && !visited[i]){
                visited[i] = 1;
                //인접한 노드에 대해서 또 다시 DFS
                DFS(i);
        }
}

void BFS(int idx){
    q.push(idx); //해당 점점을 큐에 넣음
    visited[idx] = 1; //노드가 지나갔음을 저장함
    while (!q.empty())
    {
        idx = q.front();  //큐에 쌓여있는 첫 정점을 반환
        q.pop();   //큐에 쌓여있는 첫 정점을 큐에서 빼냄
        cout << idx << " ";
        //BFS는 해당 노드에 인접한 노드들을 모두 추가한 뒤 BFS 진행
        for(int i=1; i<=N; i++)  //빼낸 정점에 연결되어 있는 정점들 검색
        if (adjacent[idx][i] && !visited[i])  //방문되지 않았다면 방문함
        {
                visited[i] = 1;
                q.push(i);
        }
    }
}

int main(void)
{
    cin >> N >> M >> V;
    for (int i = 0; i < M; i++)
    {
        int from, to;
        cin >> from >> to;
        adjacent[from][to] = 1;
        adjacent[to][from] = 1;
    }
    visited[V] = 1; //V에서 시작하므로
    DFS(V);
    cout << endl;
    memset(visited, false, sizeof(visited)); //DFS에서 사용되었던 visited 초기화
    BFS(V);
    cout << endl;
    return 0;

}
