# This file contains a variety of operations for testing purposes.

def calculate_sum(a, b):
    """Calculate the sum of two numbers."""
    return a + b

def reverse_string(s):
    """Reverse a given string."""
    return s[::-1]

def generate_fibonacci(n):
    """Generate a Fibonacci sequence of length n."""
    sequence = [0, 1]
    while len(sequence) < n:
        sequence.append(sequence[-1] + sequence[-2])
    return sequence

def check_prime(num):
    """Check if a number is a prime number."""
    if num <= 1:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

def find_maximum(numbers):
    """Find the maximum number in a list."""
    if not numbers:
        return None
    return max(numbers)

def read_file(file_path):
    """Read the content of a file."""
    with open(file_path, 'r') as file:
        return file.read()
