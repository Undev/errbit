class ProblemDestroy

  attr_reader :problem

  def initialize(problem)
    @problem = problem
  end

  def execute
    delete_errs
    delete_comments
    problem.delete
  end

  private

  def errs_id
    problem.errs.only(:id).map(&:id)
  end

  def comments_id
    problem.comments.only(:id).map(&:id)
  end

  def delete_errs
    Err.collection.remove(:_id => { '$in' => errs_id })
    Notice.collection.remove(:err_id => { '$in' => errs_id })
  end

  def delete_comments
    Comment.collection.remove(:_id => { '$in' => comments_id })
  end

end
