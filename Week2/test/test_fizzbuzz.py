import pytest
from lib.fizzbuzz import *

def test_PepsiCoke(num):
    if num == 1:
        assert "1"
    elif num == 2:
        assert "2"

    elif num % 3 == 0 and num % 5 == 0:
        assert "PepsiCoke"

    elif num % 3 == 0:
        assert "Pepsi"

    elif num % 5 == 0:
        return "Coke"
        
    else:
        return None
