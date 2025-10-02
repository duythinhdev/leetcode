class Solution {
 public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        for (int num : nums) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }
        System.out.println("Frequency Map: " + frequencyMap);

        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(
            (a, b) -> frequencyMap.get(b) - frequencyMap.get(a)
        );
        maxHeap.addAll(frequencyMap.keySet());

        // Log: In ra heap sau khi addAll
        System.out.println("Max Heap (before polling): " + maxHeap);

        int[] result = new int[k];
        for (int i = 0; i < k; i++) {
            result[i] = maxHeap.poll();
            System.out.println("Polled: " + result[i]);
        }

        return result;
    }
}
