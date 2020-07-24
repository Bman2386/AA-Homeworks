class Stack

  attr_reader :underlying_array
    def initialize
        @underlying_array = []
      # create ivar to store stack here!
    end

    def push(el)
      underlying_array.push(el)
      el
      # adds an element to the stack
    end

    def pop
      underlying_array.pop
      # removes one element from the stack
    end

    def peek
      underlying_array.last
      # returns, but doesn't remove, the top element in the stack
    end
  end