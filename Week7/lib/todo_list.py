class TodoList:
    def __init__(self):
        self.items = []

    def get_list(self):
        return self.items

    def add_item(self, item):
        self.items.append(item)

    def remove_first_item(self):
        if self.items:
            del self.items[0]

    def remove_last_item(self):
        if self.items:
            self.items.pop()

    def remove_item(self, item):
        if item in self.items:
            self.items.remove(item)
