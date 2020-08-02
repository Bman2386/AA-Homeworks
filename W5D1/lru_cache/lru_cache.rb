class LRUCache
    def initialize
        @cache = []
    end

    def count
        cache.length
      # returns number of elements currently in cache
    end

    def add(el)
        return false if cache.include?(el)
        cache << el
      # adds element to cache according to LRU principle
    end

    def show
        cache.each do |el|
            p el
        end
         # shows the items in the cache, with the LRU item first
    end

    private
    attr_accessor :cache
    # helper methods go here!

  end