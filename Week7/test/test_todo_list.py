import pytest
from lib.todo_list import TodoList

@pytest.fixture
def todo_list():
    return TodoList()

def test_call_list(todo_list):
    assert todo_list.get_list() == []

def test_add_item(todo_list):
    todo_list.add_item("Buy groceries")
    assert todo_list.get_list() == ["Buy groceries"]

def test_add_multiple_items(todo_list):
    todo_list.add_item("Buy groceries")
    todo_list.add_item(42)  # Adding a number
    todo_list.add_item({"task": "Walk the dog"})  # Adding a dictionary
    todo_list.add_item(True)  # Adding a boolean
    assert todo_list.get_list() == ["Buy groceries", 42, {"task": "Walk the dog"}, True]

def test_remove_first_item(todo_list):
    todo_list.add_item("Buy groceries")
    todo_list.add_item(42)
    todo_list.add_item({"task": "Walk the dog"})
    todo_list.remove_first_item()
    assert todo_list.get_list() == [42, {"task": "Walk the dog"}]

def test_remove_last_item(todo_list):
    todo_list.add_item("Buy groceries")
    todo_list.add_item(42)
    todo_list.add_item({"task": "Walk the dog"})
    todo_list.remove_last_item()
    assert todo_list.get_list() == ["Buy groceries", 42]

def test_remove_specific_item(todo_list):
    todo_list.add_item("Buy groceries")
    todo_list.add_item(42)
    todo_list.add_item({"task": "Walk the dog"})
    todo_list.add_item(True)
    todo_list.remove_item({"task": "Walk the dog"})  # Removing a dictionary
    assert todo_list.get_list() == ["Buy groceries", 42, True]
